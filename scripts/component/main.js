var clipboard;
  new Clipboard('.copy-to-clipboard', {
    target: function(trigger) {
      return trigger.nextElementSibling;
    }
  });
