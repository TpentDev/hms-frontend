export class Printer {
    constructor(
        public id: string,
        public model: string,
        public manufacturer: string,
        public description: string,
        public hasWifi: boolean,
        public hasUsb: boolean,
        public hasEthernet: boolean,
        public hasScanner: boolean,
        public hasFax: boolean,
        public hasUsbFlashDriver: boolean,
        public image: string,
        public price: number
    ) {}

}