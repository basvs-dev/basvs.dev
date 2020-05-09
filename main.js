function hide(divClass) { 
    $("." + divClass).hide();
} 

function show(divClass) { 
    
    $("." + divClass).show(); 
} 

$(function() {
    $('#htmlButton').change(function() {
        if (($(this).prop('checked'))) {
            $('#cssButton').prop('checked', false).change();
            $('#jsButton').prop('checked', false).change();
            $('#jqButton').prop('checked', false).change();
            $('#bsButton').prop('checked', false).change();
            show('htmlProject');
        }

        if ((!$(this).prop('checked'))) {
            hide('htmlProject');
        }
    })
  })

  $(function() {
    $('#cssButton').change(function() {
        if (($(this).prop('checked'))) {
            $('#htmlButton').prop('checked', false).change();
            $('#jsButton').prop('checked', false).change();
            $('#jqButton').prop('checked', false).change();
            $('#bsButton').prop('checked', false).change();
            show('cssProject');
        }

        if ((!$(this).prop('checked'))) {
            hide('cssProject');
        }
    })
  })

  $(function() {
    $('#jsButton').change(function() {
        if (($(this).prop('checked'))) {
            $('#htmlButton').prop('checked', false).change();
            $('#cssButton').prop('checked', false).change();
            $('#jqButton').prop('checked', false).change();
            $('#bsButton').prop('checked', false).change();
            show('jsProject');
        }

        if ((!$(this).prop('checked'))) {
            hide('jsProject');
        }
    })
  })

  $(function() {
    $('#jqButton').change(function() {
        if (($(this).prop('checked'))) {
            $('#htmlButton').prop('checked', false).change();
            $('#cssButton').prop('checked', false).change();
            $('#jsButton').prop('checked', false).change();
            $('#bsButton').prop('checked', false).change();
            show('jqProject');
        }

        if ((!$(this).prop('checked'))) {
            hide('jqProject');
        }
    })
  })

  $(function() {
    $('#bsButton').change(function() {
        if (($(this).prop('checked'))) {
            $('#htmlButton').prop('checked', false).change();
            $('#cssButton').prop('checked', false).change();
            $('#jsButton').prop('checked', false).change();
            $('#jqButton').prop('checked', false).change();
            show('bsProject');
        }

        if ((!$(this).prop('checked'))) {
            hide('bsProject');
        }
    })
  })