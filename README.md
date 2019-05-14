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

We will also change the `strong` elements into HTML `input elements` *with no closing tags*.

```html
<p>First name: <input data-bind="value: firstName" /></p>
<p>Last name: <input data-bind="value: lastName" /></p>
```

Now we need to introduce **observables**.

An **observable** is a property that automatically will issue notifications whenever their value changes.

Update your viewmodel to make the `firstName` and `lastName` properties **observable** using `ko.observable`:

```JavaScript
function AppViewModel() {
    this.firstName = ko.observable("Nicky");
    this.lastName = ko.observable("Zebra");
}
```

There should now be editable text boxes with the names inside.


## 3. Defining Computed Values

In order to combine or convert multiple observables, Knockout uses **computed properties**. A **computed property** is *observable* (they note change) and they are *computed* based on the values of other observables.

Let's add a `fullName` property to the view model by adding the following code inside the `AppViewModel` after `firstName` and `lastName` are declared.

```JavaScript
function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
    
    // NEW CODE
    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);
}
```

In order to display `fullName` in the document, we need to add the following to the HTML file:

```HTML
<p>Full name: <strong data-bind="text: fullName"></strong>
```

You should now see something like:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First name: **Nicky**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last name: **Zebra**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full name: **Nicky Zebra**

And when you change the name in the text boxes, the `fullName` should change to mirror your inputs.


## 4. Add More Behavior

Let's add a button to capitalize the last name!

```JavaScript
    // Leave firstName, lastName, and fullName

    this.capitalizeLastName = function() {
        var currentVal = this.lastName(); // Reads lastName
        this.lastName(currentVal.toUpperCase()); // Rewrites lastName
    };
```

Next add a button that calls the function.

```HTML
<button data-bind="click: capitalizeLastName">Go caps!</button>
```

When you click on the button, your `lastName` value should be all uppercase!