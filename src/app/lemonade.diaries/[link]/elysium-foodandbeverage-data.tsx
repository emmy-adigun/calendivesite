import Image from "next/image";
import { AlluraFont } from "../../font";
import glass1 from '../../../../public/images/glass1.png';
import glass2 from '../../../../public/images/glass2.png';

const ElysiumFoodAndBeverageData = () => {
    return (
        <div className="relative h-auto bg-[#34461D] text-red-100">
            <div className="fixed bottom-0 left-0 w-auto z-10">
                <Image src={glass2} alt="Left Hand Holding Glass"width={50}height={100}priority/>
            </div>

            
            <div className="fixed bottom-0 right-0 w-auto z-10">
                <Image src={glass1} alt="Right Hand Holding Glass" width={70} height={100} priority/>
            </div>

            <div className="container mx-auto py-10 uppercase text-center">
                <h1 className="text-4xl font-bold py-3 leading-10 tracking-tight">DRINKS MENU</h1>
                <h2 className="text-xl font-semibold py-3"><span className="underline">COCKTAIL</span> (all ₦12,000)</h2>
                <div className="py-3">
                    <h3 className="text-md font-semibold">NAPOLITAN NEGRONI</h3>
                    <p className="text-sm font-extralight">(APEROL, Sweet vermoth, gin, lemon juice, simple syrup)</p>
                </div>
                <div className="py-3">
                    <h3 className="text-md font-semibold">WHISKEY SOUR</h3>
                    <p className="text-sm font-extralight">(WHISKEY, Amaretto syrup, brown sugar, lemon juice)</p>
                </div>
                <div className="py-3">
                    <h3 className="text-md font-semibold">PORNSTAR MARTINI</h3>
                    <p className="text-sm font-extralight">(Vodka, passion fruit, vanilla syrup, prosecco)</p>
                </div>
                <div className="py-3">
                    <h3 className="text-md font-semibold">LONG ISLAND ICED TEA</h3>
                    <p className="text-sm font-extralight">(TEQUILA, gin, vodka, white rum, lime, coke)</p>
                </div>
                <div className="py-3">
                    <h3 className="text-md font-semibold">GIN BASIL SMASH</h3>
                    <p className="text-sm font-extralight">(fresh basil leaves, gin, lemon juice & syrup)</p>
                </div>
                <div className="py-3">
                    <h3 className="text-md font-semibold">APEROL SPIRTZ</h3>
                    <p className="text-sm font-extralight">(APEROL, prosecco and soda)</p>
                </div>
                <div className="py-3">
                    <h2 className="text-lg font-semibold underline py-3">CHAMPAGNE</h2>
                    <div className="tracking-wide font-normal">
                        <p>VEUVE RICH 250</p>
                        <p>LAURENT PERRIER BRUT 300</p>
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="pt-5 text-lg font-semibold underline pb-3">SPIRITS</h2>
                    <div className="tracking-wide font-normal">
                        <p>CASA MIGOS TEQUILA 320</p>
                        <p>HENNESSEY VSOP 250</p>
                        <p>HENDRICKS GIN 120</p>
                        <p>BELVEDERE 150</p>
                        <p>MARTELL BLUE SWIFT 200</p>
                        <p>GLENFIDICH 18YRS 320</p>
                        <p>DON JULIO 900</p>
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold py-3 leading-10 tracking-tight">FOOD MENU</h1>
                <div className="py-3">
                    <h3 className="text-md font-semibold">GOAT CURRY ROLLS ₦12,500</h3>
                    <p className="text-sm font-extralight">
                        Soft braised pulled goat, goat curry jus, yoghurt dill dip
                    </p>
                </div>
                <div className="py-3">
                    <h3 className="text-md font-semibold">CHICKEN WINGS (Lemon & Garlic, BBQ, Hot) ₦11,500</h3>
                    <p className="text-sm font-extralight">
                        Succulent chicken wings, meticulously prepared and available in your
                        choice of zesty Lemon & Garlic, smoky BBQ, or fiery Hot flavours
                    </p>
                </div>
                <div className="py-3">
                    <h3 className="text-md font-semibold">CAPRESE AND WARA BRUSCHETTAS ₦11,500</h3>
                    <p className="text-sm font-extralight">
                        Delight in the classic combination of fresh tomatoes, basil on bed
                        of tasted bruschetta, drizzled with balsamic glaze topped with
                        locally made wara
                    </p>
                </div>
                <div className="py-3">
                    <h3 className="text-md font-semibold">KING PRAWN ATARODO PIL PIL ₦20,000</h3>
                    <p className="text-sm font-extralight">
                        King prawn poached and grilled to perfection, palm oil prawn bisque,
                        prawn ata rodo oil, microgreens
                    </p>
                </div>
                <h2 className="pt-5 text-lg font-semibold underline pb-3">TO SHARE</h2>
                <div className="py-3">
                    <h3 className="text-md font-semibold">SMALL CHOPS PLATTER ₦40,000</h3>
                    <p className="text-sm font-extralight">
                        Assortment of bite-sized delights, including pulled Lamb Croquettes
                        with tatashe emulsion and microgreens, Goat curry rolls, Vermicelli
                        prawns with sweet atarodo dip, Sweet and spicy Snail and spring
                        rolls
                    </p>
                </div>
                <div className="py-3">
                    <h3 className="text-md font-semibold">SUYA PLATTER ₦45,000</h3>
                    <p className="text-sm font-extralight">
                        Bold and spicy flavours of suya with your choice of beef, chicken,
                        lamb, or a mixed platter. Comes with 2 portion of fries
                    </p>
                </div>
                <h2 className="pt-5 text-lg font-semibold underline pb-3">DESSERT</h2>
                <div className="py-3">
                    <h3 className="text-md font-semibold">CHOCOLATE SOUFFLE ₦15,000</h3>
                    <p className="text-sm font-extralight">
                        Chocolate souffle, vanilla ice cream, hot chocolate, mint
                    </p>
                </div>
                <div className="py-3">
                    <h3 className="text-md font-semibold">ICE CREAM (VANILLA) / SORBET (ZOBO) ₦4,500</h3>
                    <p className="text-sm font-extralight">
                        A choice between Vanilla ice cream or Fruity zobo sorbet with an
                        accompaniment of seasonal fruits
                    </p>
                </div>
            </div>
            <div className={`w-full pt-20 pb-4`}>
                <p className="text-center text-[13px] font-normal">&copy; 2024 Calendive. All Rights Reserved</p>
            </div>
        </div>
    );

}

export default ElysiumFoodAndBeverageData;