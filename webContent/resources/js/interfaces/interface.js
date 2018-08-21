var warningMessage = {
    code: 500,
    name: "Something wrong",
    show: function (duration) {
        showModal("Duration " + duration + " : " + this.name);
        return 0;
    }
};
//warningMessage.show(10);
var ErrorMessage = (function () {
    function ErrorMessage(name) {
        this.name = "";
        this.code = 400;
        this.show = function (duration) {
            showModal("Error message duration " + duration + " : " + this.name);
            return 0;
        };
        this.name = name;
    }
    ;
    return ErrorMessage;
}());
//new ErrorMessage("Internal server error").show(10)
//new ErrorMessage("File not found").show(20)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvaW50ZXJmYWNlcy9pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsSUFBSSxjQUFjLEdBQWE7SUFDM0IsSUFBSSxFQUFFLEdBQUc7SUFDVCxJQUFJLEVBQUUsaUJBQWlCO0lBQ3ZCLElBQUksRUFBRSxVQUFTLFFBQWdCO1FBQzNCLFNBQVMsQ0FBRSxjQUFZLFFBQVEsV0FBTSxJQUFJLENBQUMsSUFBTSxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNiLENBQUM7Q0FDSixDQUFBO0FBQ0QsMEJBQTBCO0FBRTFCO0lBRUksc0JBQVksSUFBWTtRQUR4QixTQUFJLEdBQUcsRUFBRSxDQUFBO1FBSVQsU0FBSSxHQUFHLEdBQUcsQ0FBQztRQUNYLFNBQUksR0FBRyxVQUFTLFFBQWdCO1lBQzVCLFNBQVMsQ0FBQyw0QkFBMEIsUUFBUSxXQUFNLElBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQztZQUMvRCxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFBO1FBTkcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7SUFNTCxtQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBRUQsb0RBQW9EO0FBQ3BELDZDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJTWVzc2FnZSB7XHJcbiAgICBjb2RlOiBudW1iZXIsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBzaG93KGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkXHJcbn1cclxuXHJcbmxldCB3YXJuaW5nTWVzc2FnZTogSU1lc3NhZ2UgPSB7XHJcbiAgICBjb2RlOiA1MDAsXHJcbiAgICBuYW1lOiBcIlNvbWV0aGluZyB3cm9uZ1wiLFxyXG4gICAgc2hvdzogZnVuY3Rpb24oZHVyYXRpb246IG51bWJlcikge1xyXG4gICAgICAgIHNob3dNb2RhbCggYER1cmF0aW9uICR7ZHVyYXRpb259IDogJHt0aGlzLm5hbWV9YCk7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbn1cclxuLy93YXJuaW5nTWVzc2FnZS5zaG93KDEwKTtcclxuXHJcbmNsYXNzIEVycm9yTWVzc2FnZSBpbXBsZW1lbnRzIElNZXNzYWdlIHtcclxuICAgIG5hbWUgPSBcIlwiXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfTtcclxuICAgIGNvZGUgPSA0MDA7XHJcbiAgICBzaG93ID0gZnVuY3Rpb24oZHVyYXRpb246IG51bWJlcikge1xyXG4gICAgICAgIHNob3dNb2RhbChgRXJyb3IgbWVzc2FnZSBkdXJhdGlvbiAke2R1cmF0aW9ufSA6ICR7dGhpcy5uYW1lfWApO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL25ldyBFcnJvck1lc3NhZ2UoXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIikuc2hvdygxMClcclxuLy9uZXcgRXJyb3JNZXNzYWdlKFwiRmlsZSBub3QgZm91bmRcIikuc2hvdygyMClcclxuXHJcbiJdfQ==