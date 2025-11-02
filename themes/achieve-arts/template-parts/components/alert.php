<?php if(function_exists('get_field') && get_field('alert_messages', 'options')) : ?>
<div class="c-alert">
  <div class="c-alert__inner">
    <div class="c-alert__container">
      <div class="c-alert__items">
        <?php foreach(get_field('alert_messages', 'options') as $alert_message) : ?>
        <div class="c-alert__item">
          <?php echo $alert_message['message']; ?>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</div>
<?php endif; ?>