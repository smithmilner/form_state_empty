/**
 * @file
 * Form empty state
 */
(function formEmptyState($, Drupal) {

  Drupal.behaviors.stateEmpty = {
    attach: (context) => {
      $(context).on('state:empty', (e) => {
        if (e.trigger && e.value) {
          debugger;
          if (e.target.type == 'fieldset') {
            $("input[value='']", e.target).click();
            $("input[value=0]", e.target).click();
          } else {
            $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').find('select, input, textarea')
              .val(null)
              // For Select2 and other possible listeners.
              .trigger('change');
          }
        }
      });
    },
    detach: (context) => {
      $(context).off('state:empty');
    }
  };

 }(jQuery, Drupal));
