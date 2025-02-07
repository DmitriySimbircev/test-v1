export class PriceCheck {
    constructor(page) {
        this.page = page;

        this.choice_1 = page.getByText('+ 10 000 (0.2%)').first();
        this.choice_2 = page.getByText('-10 000 (-0.2%)').first();
        this.choice_3 = page.getByText('-4 444 445 (-88.89%)').first();
        this.choice_4 = page.getByText('+ 250 000 (5%)').first();
        this.choice_5 = page.getByText('-250 000 (-5%)').first();

        this.allert = page.getByRole('button', { name: 'Убрать' });
    }
    async check () {
        await this.choice_1.click()
        await this.choice_2.click()
        await this.choice_3.click()
        await this.choice_4.click()
        await this.choice_5.click()
    }
    async allertReselection () {
        await this.allert.click()
    }
}
/* 
Не стал использовать expect т.к. проход по локаторам и так упадёт если не найдет их. 
В тесте мы проходим по значениям после измеения цен и сверяем значения на Шахматке+. 
Так же проверяем появление аллерта о повторном выборе помещений
*/
