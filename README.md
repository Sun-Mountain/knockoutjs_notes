# KnockoutJS Notes

```html
<!-- This is a *view* - HTML markup that defines the appearance of your UI -->

<p>First name: <strong>todo</strong></p>
<p>Last name: <strong>todo</strong></p>
```

```JavaScript
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.firstName = "Bert";
    this.lastName = "Bertington";
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
```

Right now, the output will look something like:

> First name: **todo**
> Last name: **todo**

