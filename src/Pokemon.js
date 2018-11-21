class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.sprite = data.sprite.front_default;
    this.type = data.type[0].type.name;
  }
}
export default Pokemon;
