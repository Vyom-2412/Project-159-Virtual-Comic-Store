AFRAME.registerComponent("store", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "batman",
          title: "Batman Spring Issue",
          url: "./assets/batman.jpg",
        },
        {
          id: "spiderman",
          title: "The Amazing Spider Man",
          url: "./assets/spider_man.jpg",
        },
  
        {
          id: "superman",
          title: "Superman No.17",
          url: "./assets/superman.jpg",
        },
        {
          id: "xmen",
          title: "X - Men",
          url: "./assets/xmen.jpeg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;

        const borderEl = this.createBorder(position,item.id)

        const thumbnail = this.createThumbnail(item)
        borderEl.appendChild(thumbnail)

        const titleEl = this.createTitleEl(position, item)
        borderEl.appendChild(titleEl)
        this.placesContainer.appendChild(borderEl);
      }
    },

    createBorder: function(position, id){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("id", id)
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("position", position)
      entityEl.setAttribute("geometry",{
        primitive:"plane",
        width:23,
        height:31,
      })
      entityEl.setAttribute("material",{
        color:"white",
      })
      entityEl.setAttribute("cursor-listener",{})
      return entityEl
    },

    createThumbnail: function(item){
      const thumbnailEl = document.createElement("a-entity")
      thumbnailEl.setAttribute("visibile", true)
      thumbnailEl.setAttribute("geometry",{
        primitive:"plane",
        width:20,
        height:28
      })
      thumbnailEl.setAttribute("position",{x:0, y:0, z:0.1})
      thumbnailEl.setAttribute("material",{
        src:item.url
      })
      return thumbnailEl
    },

    createTitleEl: function(position,item){
      const titleEl = document.createElement("a-entity")
      titleEl.setAttribute("text",{
        font:"exo2bold",
        align:"center",
        width:80,
        color:"#e65100",
        value:item.title
      })
      const elPosition = position
      elPosition.y = -30
      titleEl.setAttribute("position", elPosition)
      titleEl.setAttribute("visible", true)
      return titleEl
    }
  });
  