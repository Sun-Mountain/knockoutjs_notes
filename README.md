# KnockoutJS Notes

## 1. Using Bindings in View

```html
<!-- This is a *view* - HTML markup that defines the appearance of your UI -->

<p>First name: <strong>todo</strong></p>
<p>Last name: <strong>todo</strong></p>
```

```JavaScript
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.firstName = "Nicky";
    this.lastName = "Zebra";
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
```

Right now, the output will look something like:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First name: **todo**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last name: **todo**


In order for the HTML to recognize the viewmodel in the JavaScript file, add `data-bind` attributes to the `strong` elements.

```html
<p>First name: <strong data-bind="text: firstName">todo</strong></p>
<p>Last name: <strong data-bind="text: lastName">todo</strong></p>
```

The output should now look like:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First name: **Nicky**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last name: **Zebra**


## 2. Make the data editable

In order to make the data editable, we need to change the `text` binding to a `value` binding.

```html
<p>First name: <strong data-bind="value: firstName">todo</strong></p>
<p>Last name: <strong data-bind="value: lastName">todo</strong></p>
```