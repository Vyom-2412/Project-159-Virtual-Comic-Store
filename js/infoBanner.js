AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      bannerInfo = {
        superman: {
          banner_url: "./assets/banners/Batman-banner.jpg",
          title: "Batman",
          released_year: "1940",
          description:
            "Batman #1 is the first issue of the Batman comic book series. The issue saw the publication of four stories, including 'The Joker', 'The Giants of Dr. Hugo Strange', 'The Cat' and 'The Joker Returns'. The stories were presumably written by Bill Finger, and drawn by Bob Kane and Jerry Robinson. The issue also saw the republication of 'The Batman: Who He is, and How He Came to Be', previously published in Detective Comics #33 and created by Finger, Kane and Sheldon Moldoff.",
        },
        spiderman: {
          banner_url: "./assets/banners/Spiderman-banner.png",
          title: "Spiderman",
          released_year: "1962",
          description:
            "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy (Aug. 1962) in the Silver Age of Comic Books.",
        },
        "Superman": {
          banner_url: "./assets/banners/superman-banner.jpg",
          title: "Super Man",
          released_year: "1942",
          description:
            "Superman is an ongoing American comic book series featuring the DC Comics superhero Superman as its protagonist. Superman began as one of several anthology features in the National Periodical Publications comic book Action Comics #1 in June 1938.",
        },
        "XMen": {
          banner_url: "./assets/banners/Xmen-banner.jpg",
          title: "XMen",
          released_year: "1963",
          description:
            "The X-Men are a superhero team appearing in American comic books published by Marvel Comics. Created by artist/co-plotter Jack Kirby and writer/editor Stan Lee, the team first appearing in The X-Men #1 (September 1963).",
        },
      };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 1,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = bannerInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.85,
        height: 0.4,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.75,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
      return entityEl;
    },
  });
  