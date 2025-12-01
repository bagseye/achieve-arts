import animationObserver from './modules/_animation-observer.js';

let currentPage = parseInt(loadmore_params.current_page);
let maxPages = parseInt(loadmore_params.max_page);
let loading = false;
let observer;
let currentCategoryId = '';

function loadMorePosts() {
    if (loading || currentPage >= maxPages) return;
    
    loading = true;
    const loadingIndicator = document.querySelector('.loading-indicator');
    
    if (loadingIndicator) {
        loadingIndicator.style.display = 'block';
    }

    const data = new FormData();
    data.append('action', 'load_more_posts');
    data.append('page', currentPage + 1);
    data.append('category_id', currentCategoryId);

    fetch(loadmore_params.ajaxurl, {
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(data => {
        if (data.posts) {
            const contentContainer = document.getElementById('site-content');
            contentContainer.insertAdjacentHTML('beforeend', data.posts);
            
            currentPage = parseInt(data.current_page);
            maxPages = parseInt(data.max_page);
            
            animationObserver();
            
            if (currentPage >= maxPages) {
                const trigger = document.getElementById('load-more-trigger');
                if (trigger) {
                    trigger.style.display = 'none';
                }
                if (observer) {
                    observer.disconnect();
                }
            }
        }
    })
    .catch(error => {
        console.error('Error loading posts:', error);
    })
    .finally(() => {
        loading = false;
        const loadingIndicator = document.querySelector('.loading-indicator');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
    });
}

function filterPosts(categoryId) {
    loading = true;
    currentCategoryId = categoryId;
    currentPage = 1;
    
    const loadingIndicator = document.querySelector('.loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'block';
    }

    const data = new FormData();
    data.append('action', 'load_more_posts');
    data.append('page', 1);
    data.append('category_id', categoryId);

    fetch(loadmore_params.ajaxurl, {
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(data => {
        if (data.posts) {
            // Replace all content with filtered posts
            const contentContainer = document.getElementById('site-content');
            contentContainer.innerHTML = data.posts;
            
            currentPage = parseInt(data.current_page);
            maxPages = parseInt(data.max_page);
            
            animationObserver();
            
            // Show/hide trigger based on available pages
            const trigger = document.getElementById('load-more-trigger');
            if (trigger) {
                if (currentPage >= maxPages) {
                    trigger.style.display = 'none';
                } else {
                    trigger.style.display = 'block';
                    // Restart infinite scroll observer
                    initInfiniteScroll();
                }
            }
        }
    })
    .catch(error => {
        console.error('Error filtering posts:', error);
    })
    .finally(() => {
        loading = false;
        const loadingIndicator = document.querySelector('.loading-indicator');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
    });
}

function initInfiniteScroll() {
    const trigger = document.getElementById('load-more-trigger');
    
    if (!trigger || currentPage >= maxPages) return;
    
    // Disconnect existing observer if it exists
    if (observer) {
        observer.disconnect();
    }

    const options = {
        root: null,
        rootMargin: '100px',
        threshold: 0.1
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !loading) {
                loadMorePosts();
            }
        });
    }, options);

    observer.observe(trigger);
}

function initCategoryFilter() {
    const categorySelect = document.getElementById('category-select');
    
    if (!categorySelect) return;
    
    categorySelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        filterPosts(selectedCategory);
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize category filter
    initCategoryFilter();
    
    // Initialize infinite scroll if supported
    if ('IntersectionObserver' in window) {
        initInfiniteScroll();
    } else {
        // Fallback: show a load more button
        const trigger = document.getElementById('load-more-trigger');
        if (trigger) {
            trigger.innerHTML = '<button id="load-more-btn" class="load-more-btn">Load More Posts</button>';
            const loadMoreBtn = document.getElementById('load-more-btn');
            if (loadMoreBtn) {
                loadMoreBtn.addEventListener('click', loadMorePosts);
            }
        }
    }
});