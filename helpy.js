<script>
$(document).ready(function(){
  var icons = $('[class*=" glyphicon-gg-"]');
  if (icons.length > 0){
    icons.each(function(){
      this.innerHTML = "<i class=" + this.className.substring(this.className.indexOf("gg-"), this.className.length) + "></i>"
    });
  }
  var iconAPI = $('.glyphicon-gg-arrows-exchange');
  if (iconAPI.length > 0){
    iconAPI.each(function(){
      this.innerHTML;
    });
  }
});
</script>
