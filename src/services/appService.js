export const getUserFormLocal = function() {
    let user = localStorage.getItem("current_user");
    if (user) {
        return JSON.parse(user);
    } else {
        return false;
    }
}