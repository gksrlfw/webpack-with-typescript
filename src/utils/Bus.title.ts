import main from "../components/Layout/Main";

class BusForTitle {
    private data: string = 'Main!!!';
    getData() {
        return this.data;
    }

    setData(data: any) {
        this.data = data;
        main.setMainTitle();
    }
}

const busForTitle = new BusForTitle();
export default busForTitle;