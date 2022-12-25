class Map {
    constructor(objects) {
        this.objects = objects;
    }
    render(){
        this.objects.forEach(element => {
            element.draw();
        });
    }
}