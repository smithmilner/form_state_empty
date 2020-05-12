/**
 * @file
 * Form empty state
 */
(function formEmptyState($, Drupal) {

  Drupal.behaviors.stateEmpty = {
    attach: (context) => {
      $(context).on('state:empty', (e) => {
        if (e.trigger && e.value) {
          if (e.target.type == 'fieldset') {
            $("input[value='']", e.target).click();
            $("input[value=0]", e.target).click();
          } else {
            $(e.target).val('');
          }
        }
      });
    },
    detach: (context) => {
      $(context).off('state:empty');
    }
  };

 }(jQuery, Drupal));
