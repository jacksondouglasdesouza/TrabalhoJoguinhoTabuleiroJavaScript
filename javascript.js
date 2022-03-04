
let field, player;

class Field{
        constructor(cols, rows, containerId){
        this.cols = cols;
        this.rows = rows;
        this.container = document.querySelector(containerId);
        this.createField();
        }

        createField(){
            let field = [];
            for (let i = 0; i < this.rows; i++){
                field[i] = [];
                for (let j = 0; j < this.cols; j++){
                    field[i].push(this.createRock())
                }
            }

            this.field = field;
            this.drawField();
        }

        createRock(){
            return Math.trunc(Math.random()*9) === 1 ? 'X' : '';
        }

        drawField(){
            let template = '';
            for (let i = 0; i < this.rows; i++){
                template += '<tr>';
                    for (let j = 0; j <this.cols; j++){
                        template += `<td>${this.field[i][j]}</td>`;
                    }
                template += '</tr>';
            }
            this.container.innerHTML = template;
        }

}

class Character{
    constructor(field, x, y, face){
        this.face = face;
        this.x = x;
        this.y = x;
        this.table = field;
        this.setPosition(this.x, this.y);
    }

    up(){
        if(this.y > 0){
            this.setPosition(this.x, this.y - 1);
        }
    }

    down(){
        if(this.y+1 < this.table.rows){
            this.setPosition(this.x, this.y + 1);
        }

    }

    left(){
        if(this.x > 0){
            this.setPosition(this.x - 1, this.y);
        }

    }

    right(){
        if(this.x+1 < this.table.cols){
            this.setPosition(this.x+1, this.y);
        }
    }

    setPosition(x, y){
        if(this.table.field[y][x] === ''){
            this.table.field[this.y][this.x] = '';
            this.x = x;
            this.y = y;
            this.table.field[this.y][this.x] = this.face;
            this.table.drawField();
        }
    }
}

class Player extends Character{
    constructor(field){
        super(field, 0, 0, 'o_O')
    }
}

field = new Field(3, 4, '#myTable');
player = new Player(field);