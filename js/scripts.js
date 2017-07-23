$("input:radio").click(function() {
    var a = $("[name='" + this.name + "']").map(function() {
        return this.value
    }).get().join(" ");
    console.log(a), $("#complementary").removeClass(a).addClass(this.value), $("#monochromatic").removeClass(a).addClass(this.value), $("#muted").removeClass(a).addClass(this.value), $("#adjacent").removeClass(a).addClass(this.value), $("#triad").removeClass(a).addClass(this.value), $("#tetrad").removeClass(a).addClass(this.value), $("#inverted").removeClass(a).addClass(this.value), $("#vibrant").removeClass(a).addClass(this.value), $("#rainbow").removeClass(a).addClass(this.value)
})