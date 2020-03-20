(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
}

function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
}

function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotif", handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNzkyMTJkZmMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm5pY2tuYW1lIiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwib24iXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjs7QUFFQSxTQUFTQyxXQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUM1QkgsRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVksWUFBWixFQUEwQjtBQUFFRCxJQUFBQSxPQUFPLEVBQVBBO0FBQUYsR0FBMUI7QUFDRDs7QUFFRCxTQUFTRSxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBa0M7QUFBQSxNQUN4QkgsT0FEd0IsR0FDRkcsSUFERSxDQUN4QkgsT0FEd0I7QUFBQSxNQUNmSSxRQURlLEdBQ0ZELElBREUsQ0FDZkMsUUFEZTtBQUVoQ0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWVGLFFBQWYsZUFBNEJKLE9BQTVCO0FBQ0Q7O0FBQ0QsU0FBU08sV0FBVCxDQUFxQkgsUUFBckIsRUFBK0I7QUFDN0JQLEVBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGFBQVosRUFBMkI7QUFBRUcsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQTNCO0FBQ0Q7O0FBRURQLE1BQU0sQ0FBQ1csRUFBUCxDQUFVLGNBQVYsRUFBMEJOLGtCQUExQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcclxuXHJcbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICBzb2NrZXQuZW1pdChcIm5ld01lc3NhZ2VcIiwgeyBtZXNzYWdlIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVNZXNzYWdlTm90aWYoZGF0YSkge1xyXG4gIGNvbnN0IHsgbWVzc2FnZSwgbmlja25hbWUgfSA9IGRhdGE7XHJcbiAgY29uc29sZS5sb2coYCR7bmlja25hbWV9OiAke21lc3NhZ2V9YCk7XHJcbn1cclxuZnVuY3Rpb24gc2V0Tmlja25hbWUobmlja25hbWUpIHtcclxuICBzb2NrZXQuZW1pdChcInNldE5pY2tuYW1lXCIsIHsgbmlja25hbWUgfSk7XHJcbn1cclxuXHJcbnNvY2tldC5vbihcIm1lc3NhZ2VOb3RpZlwiLCBoYW5kbGVNZXNzYWdlTm90aWYpO1xyXG4iXX0=
},{}]},{},[1])