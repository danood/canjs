import { Component } from "//unpkg.com/can@5/core.mjs";

Component.extend({
  tag: "evil-tinder",
  view: `
      <div class="header"></div>

      <div class="images">
        <div class="current">
          <img src="{{ currentProfile.img }}"/>
        </div>
        <div class="next">
          <img src="{{ nextProfile.img }}"/>
        </div>
      </div>

      <div class="footer">
        <button class="dissBtn"
                on:click="nope()">Dislike</button>
        <button class="likeBtn"
                on:click="like()">Like</button>
      </div>
  `,
  ViewModel: {
    profiles: {
      default() {
        return [{img: "https://user-images.githubusercontent.com/78602/40454685-5cab196e-5eaf-11e8-87ac-4af6792994ed.jpg", name: "gru"},
          {img: "https://user-images.githubusercontent.com/78602/40454705-6bf4d3d8-5eaf-11e8-9562-2bd178485527.jpg", name: "hannibal"},
          {img: "https://user-images.githubusercontent.com/78602/40454830-e71178dc-5eaf-11e8-80ee-efd64911e35f.png", name: "joker"},
          {img: "https://user-images.githubusercontent.com/78602/40454681-59cffdb8-5eaf-11e8-94ac-4849ab08d90c.jpg", name: "darth"},
          {img: "https://user-images.githubusercontent.com/78602/40454709-6fecc536-5eaf-11e8-9eb5-3da39730adc4.jpg", name: "norman"},
          {img: "https://user-images.githubusercontent.com/78602/40454711-72b19d78-5eaf-11e8-9732-80155ff8bb52.jpg", name: "stapuft"},
          {img: "https://user-images.githubusercontent.com/78602/40454672-566b4984-5eaf-11e8-808d-cb5afd445e89.jpg", name: "dalek"},
          {img: "https://user-images.githubusercontent.com/78602/40454720-7c3d984c-5eaf-11e8-9fa7-f68ddd33e3f0.jpg", name: "wickedwitch"},
          {img: "https://user-images.githubusercontent.com/78602/40454722-802ef694-5eaf-11e8-8964-ca648368720d.jpg", name: "zod"},
          {img: "https://user-images.githubusercontent.com/78602/40454716-76bef438-5eaf-11e8-9d29-5002260e96e1.jpg", name: "venom"}];
      }
    },

    get currentProfile() {
      return this.profiles.get(0);
    },
    get nextProfile() {
      return this.profiles.get(1);
    },

    like() {
      console.log("LIKED");
      this.profiles.shift();
    },
    nope() {
      console.log("NOPED");
      this.profiles.shift();
    },

  }
});
