/**
 * @file
 * Form empty state
 */
(function formEmptyState($, Drupal) {

  Drupal.behaviors.stateEmpty = {
    attach(context) {
      $(context).on('state:empty', function(e) {
        if (e.trigger && e.value) {
          if (e.target.type == 'fieldset') {
            $("input[value='']", e.target).click();
            $("input[value=0]", e.target).click();
          } else {
            // Handle the case of the '_none' value for selects.
            const nullValue = $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper')
              .find("select option[value='_none']").length > 0 ? '_none' : null;
            $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').find('select, input, textarea')
              .val(nullValue)
              // For Select2 and other possible listeners.
              .trigger('change');
          }
        }
      });
    },
    detach(context) {
      $(context).off('state:empty');
    }
  };

 }(jQuery, Drupal));
