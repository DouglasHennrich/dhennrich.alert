/*
@ cleanWidget
*/
function cleanWidget(){
    for( var i = $.DHalertInner.children.length; i > 2; i-- ){
        $.DHalertInner.remove( $.DHalertInner.children[i-1] );
    }
};

/*
@ show
*/
function show(_message, _options, _callback){
    // Be sure that we have cleaned our alert view before add more buttons
    cleanWidget();

    var btns = []
      , _i = 0
      ;

    //
    $.DHalertMessage.text = _message;

    //
    $.DHalertMask.show();

    //
    _options.forEach(function(option){
        btns[_i] = Ti.UI.createButton({
            index: _i
          , title: option
        });
        btns[_i].applyProperties($.createStyle({ classes: ['DHBtns'], id: 'DHBtns' }));
        btns[_i].addEventListener('click', _callback);

        $.DHalertInner.add(btns[_i]);
        _i ++;
    });
};

/*
@ hide
*/
function hide(){
    $.DHalertMask.hide();
    cleanWidget();
};

exports.show = show;
exports.hide = hide;
