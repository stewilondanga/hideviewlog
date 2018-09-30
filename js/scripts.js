var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

$(function()
{
    var keyInput = $('#key'), keyArr = [], key, keyLength, i, showKey = $('#show-key'), keyDots = $('#key-dots'), dot = $('.dot'), viewPass = false;

    function _updateKey()
    {
        keyArr = [];
        key = keyInput.val();
        keyLength = key.length;

        if( keyLength > 0 )
        {
            for(i = 0; i < keyLength; i++)
            {
                keyArr[i] = key[i];
            }
        }

        if( keyArr.length == 4 )
            dot.addClass('white');
        else
            dot.removeClass('white');
    }

    function _showKey()
    {
        if( keyArr.length == 4 )
        {
            if(! viewPass )
            {
                $(this).find('i').attr('class','fas fa-eye');
                viewPass = true;
            }
            else
            {
                $(this).find('i').attr('class','fas fa-eye-slash');
                viewPass = false;
            }

            dot.addClass('white');

            for(i = 0; i < 4; i++)
            {
                dot.eq(i).html( '<span>' + keyArr[i] + '</span>' );
            }

            keyDots.toggleClass('active');

            if(! keyDots.hasClass('active') )
                dot.find('span').text('');

            setTimeout(function(){ dot.find('span').toggleClass('show'); },100);
        }
    }

    keyInput.on('keyup',_updateKey);
    showKey.on('click',_showKey);
});
