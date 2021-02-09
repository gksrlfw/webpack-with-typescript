export default class Bus {
    constructor(private data: any) {
        this.data = data;
    }

    getData() {
        return this.data;
    }

    setData(data: any) {
        this.data = data;
    }
}