# Form State Empty

Provides a small extension to [Core's conditional form fields system](https://www.drupal.org/docs/8/api/form-api/conditional-form-fields). Allows the clearing of a html **input** element based on the state of another form element(s).

Example:
<pre>
$form['field_to_empty']['#states'] = [
  'empty' => [
    ':input[name="field_being_listened_to"]' => ['value' => '0'],
  ],
  'visible' => [
    ':input[name="field_being_listened_to"]' => ['value' => '1'],
  ]
];
</pre>

The most common usage is when a field's visibility is being toggled. You don't want the value from an invisible field to be submitted. Before the best way to handle this was to "disable" the form element. Unfortunately this prevented that element from submitting at all so you could never overwrite a previous form submission.
