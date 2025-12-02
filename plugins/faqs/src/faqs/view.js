/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

let $toggleLists;
let $toggleListItems;
let $toggleContent;
let $timeout;
let $DEBUG = false;

function cacheDOM() {
    $toggleLists = [...document.querySelectorAll('.js-toggle-list')];
}

function toggleItem() {
    if ($DEBUG) return;

    $DEBUG = true;

    const contentArea = this.nextElementSibling;

    if (this.classList.contains('faq-open')) {
        this.classList.remove('faq-open');
        contentArea.style = '';
        setTimeout(function () {
            $DEBUG = false;
        }, 300);
    } else {
        this.classList.add('faq-open');
        contentArea.style.height = '0';
        contentArea.style.height = contentArea.scrollHeight + 'px';
        setTimeout(() => {
            $DEBUG = false;
        }, 300);
    }
}

function createToggleList($toggleList) {
    $toggleListItems = [...$toggleList.querySelectorAll('.js-toggle-list__trigger')];
    if ($toggleListItems && $toggleListItems.length) {
        $toggleListItems.forEach(($item) => {
            $item.addEventListener('click', toggleItem);
        });
    }
}

function init() {
    cacheDOM();
    if ($toggleLists && $toggleLists.length) {
        $toggleLists.forEach(($toggleList) => {
            createToggleList($toggleList);
        });

        // Automatically open the first item of the first toggle list
        if ($toggleLists[0]) {
            toggleItem.call($toggleLists[0].querySelector('.js-toggle-list__trigger'));
        }
    }
}

init();
