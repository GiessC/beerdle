import Color from './Color';
import Flavor from './Flavor';
import LabelColor from './LabelColor';
import Level from './Level';

enum BeerStyle {
    IPA = 'IPA',
    STOUT = 'Stout',
    LAGER = 'Lager',
    PILSNER = 'Pilsner',
    WHEAT = 'Wheat',
}

enum BeerAroma {
    FRUITY = 'Fruity',
    FLORAL = 'Floral',
    SPICY = 'Spicy',
    CITRUSY = 'Citrusy',
}

enum BeerClarity {
    CLEAR = 'Clear',
    HAZY = 'Hazy',
    CLOUDY = 'Cloudy',
}

enum BeerFinish {
    DRY = 'Dry',
    SWEET = 'Sweet',
    BITTER = 'Bitter',
    SMOOTH = 'Smooth',
}

enum Body {
    LIGHT = 'Light',
    MEDIUM = 'Medium',
    FULL = 'Full',
}

interface BeerInfo {
    id: number;
    name: string;
    brand: string;
    origin: string;
    labelColor?: LabelColor;
    color?: Color; // not sold on these
    flavor?: Flavor; // not sold on these
    style?: BeerStyle; // not sold on these
    aroma?: BeerAroma; // not sold on these
    body?: Body; // not sold on these
    carbonation?: Level; // not sold on these
    clarity?: BeerClarity; // not sold on these
    finish?: BeerFinish; // not sold on these
    imageUrl: string;
}

export default class Beer {
    private _id: number;
    private _name: string;
    private _brand: string;
    private _origin: string;
    private _labelColor?: LabelColor;
    private _color?: Color;
    private _flavor?: Flavor;
    private _style?: BeerStyle;
    private _aroma?: BeerAroma;
    private _body?: Body;
    private _carbonation?: Level;
    private _clarity?: BeerClarity;
    private _finish?: BeerFinish;
    private _imageUrl: string;

    public constructor(info: BeerInfo) {
        this._id = info.id;
        this._name = info.name;
        this._brand = info.brand;
        this._origin = info.origin;
        this._labelColor = info.labelColor;
        this._flavor = info.flavor;
        this._style = info.style;
        this._aroma = info.aroma;
        this._body = info.body;
        this._carbonation = info.carbonation;
        this._clarity = info.clarity;
        this._finish = info.finish;
        this._imageUrl = info.imageUrl;
    }

    public get id(): number {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get brand(): string {
        return this._brand;
    }

    public get origin(): string {
        return this._origin;
    }

    public get labelColor(): LabelColor | undefined {
        return this._labelColor;
    }

    public get color(): Color | undefined {
        return this._color;
    }

    public get flavor(): Flavor | undefined {
        return this._flavor;
    }

    public get style(): BeerStyle | undefined {
        return this._style;
    }

    public get aroma(): BeerAroma | undefined {
        return this._aroma;
    }

    public get body(): Body | undefined {
        return this._body;
    }

    public get carbonation(): Level | undefined {
        return this._carbonation;
    }

    public get clarity(): BeerClarity | undefined {
        return this._clarity;
    }

    public get finish(): BeerFinish | undefined {
        return this._finish;
    }

    public get imageUrl(): string {
        return this._imageUrl;
    }
}
