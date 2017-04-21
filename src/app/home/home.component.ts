import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sd-home',
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html'
})
export class HomeComponent {
    
    public slides: Array<any> = [];
    public slogan: Array<string> = [
        '免费简约的问卷系统',
        '简单 好用 在线调查网站',
        '多方式创建编辑问卷'
    ];

    constructor() {
        for (let i = 0; i < 3; i++){
            this.addSlide(i);
        }
    }

    private addSlide(idx: number) {
        this.slides.push({
            image: `./assets/img/home/banner_0${idx + 1}.jpg`,
            text: this.slogan[idx]
        });
    }

}