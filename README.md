## Quick Start

### Get it [![gitTio](http://gitt.io/badge.svg)](http://gitt.io/component/dhennrich.alert)
Download this repository and consult the [Alloy Documentation](http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_XML_Markup-section-35621528_AlloyXMLMarkup-ImportingWidgets) on how to install it, or simply use the [gitTio CLI](http://gitt.io/cli):

`$ gittio install dhennrich.alert`

### Notes
This is a modified [nl.fokkezb.loading](https://github.com/FokkeZB/nl.fokkezb.loading) widget. I took his structure as base for my widget, so all credits goes to him.

* Thanks [@FokkeZB](https://github.com/FokkeZB)

## How it looks like

![.AlertImage](/assets/alertImage.jpg)


### XML

Add the widget below all your code.
```xml
<Alloy>
    <Window>
        <View>
            <Label id="Label">Something</Label>
        </View>

        <!-- Alert -->
        <Widget src="dhennrich.alert" id="DHalert"/>
    </Window>
</Alloy>
```

### JS

When you want to display an alert

```javascript
$.DHalert.show('Something you want to say', ['Option 1', 'Option 2'], function(event){
    // Hide and remove elements of alert
    $.DHalert.hide();

    switch(this.index){
        case 0:
            console.log('First button clicked');
            // Do something when press "Option 1"
            break;

        case 1:
            console.log('Second button clicked');
            // Do something when press "Option 2"
            break;
    }
});
```

**IMPORTANT** The callback should be handled as `index` as above example

### TSS
You can customize your alert on `app.tss` file.

* `#DHalertMask` is the role background of the view.

```css
{
    backgroundColor: "#8000",
    visible: false
}
```

* `#DHalertOuter` is the background of alert.

```css
{
    width: Ti.UI.SIZE,
    height: Ti.UI.SIZE,

    borderRadius: 10,
    backgroundColor: "#F2248e21"
}
```

* `#DHalertMessage` is the label that display our alert

```css
{
    top: '0dp',
    width: Ti.UI.SIZE,
    height: Ti.UI.SIZE,

    color: '#fff',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    font: { fontSize: '20dp', fontFamily: 'Exo-Bold' }
}
```

* `#DHalertSeparator` is the separator view between message and buttons

```css
{
    top: '5dp',
    height: '2dp',
    width: '90%',
    backgroundColor: "#FFBC00"
}
```

* `#DHBtns` is the options buttons style

```css
{
    backgroundColor: 'transparent'
  , top: '20dp'
  , height: Ti.UI.SIZE
  , textAlign: 'center'
  , color: 'red'
  , font: { fontSize: 18, fontFamily: "Exo-Bold" }
}
```

### Exposed Functions

* show
* hide


$.`idWidget`.show( `alert message`, [ `array`, `buttons`, `names` ], `callback`);

$.`idWidget`.hide();


### Changelog
* **0.0.2** - Add customization for Options Button
