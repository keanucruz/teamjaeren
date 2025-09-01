import { useState } from 'react';
import { motion } from "motion/react";
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X, Images, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Project data structure
interface Project {
    id: string;
    title: string;
    description: string;
    images: string[];
    mainImage: string;
    featured?: boolean;
}

// Project data - all 20 projects with sample titles and descriptions
const projects: Project[] = [
    {
        id: 'project-1',
        title: 'Moderne Kjøkkenrenovering',
        description: 'Komplett transformasjon av kjøkken med nye skap, benkeplate og moderne design.',
        images: [
            '/projects/project-1/475895077_2131634870628284_2408142642362214930_n.jpg',
            '/projects/project-1/476124313_2131634867294951_2200825663579949757_n.jpg',
            '/projects/project-1/476159813_2131634537294984_7406538814809025372_n.jpg',
            '/projects/project-1/476162088_2131634587294979_1782095260138082371_n.jpg',
            '/projects/project-1/476162088_2131634847294953_8193665183533104623_n.jpg',
            '/projects/project-1/476334989_2131634753961629_8371082186504370994_n.jpg',
            '/projects/project-1/476428657_2131634853961619_4220883679107877673_n.jpg',
            '/projects/project-1/476449935_2131634860628285_7349775265480968078_n.jpg',
            '/projects/project-1/476846479_2131634823961622_1017094781305195038_n.jpg'
        ],
        mainImage: '/projects/project-1/475895077_2131634870628284_2408142642362214930_n.jpg',
        featured: true
    },
    {
        id: 'project-2',
        title: 'Baderomsoppussing',
        description: 'Elegant baderom med moderne fliser og armaturer.',
        images: [
            '/projects/project-2/474521395_2121866958271742_4611444455579135674_n.jpg',
            '/projects/project-2/474857499_2121867021605069_6125091294044432439_n.jpg',
            '/projects/project-2/474865259_2121866934938411_4915101728825444515_n.jpg',
            '/projects/project-2/474870403_2121866948271743_3263167242474880583_n.jpg',
            '/projects/project-2/474899528_2121866954938409_3484030516373131524_n.jpg'
        ],
        mainImage: '/projects/project-2/474521395_2121866958271742_4611444455579135674_n.jpg'
    },
    {
        id: 'project-3',
        title: 'Stueoppgradering',
        description: 'Åpen stueløsning med nye gulv og vegger.',
        images: [
            '/projects/project-3/201236824_1250803042044809_3889955069865837141_n.jpg',
            '/projects/project-3/202244483_1250801128711667_6182783938109521430_n.jpg',
            '/projects/project-3/202981322_1250802955378151_5683570967308902956_n.jpg',
            '/projects/project-3/203589474_1250802982044815_1874533037669559840_n.jpg'
        ],
        mainImage: '/projects/project-3/201236824_1250803042044809_3889955069865837141_n.jpg'
    },
    {
        id: 'project-4',
        title: 'Soveromsforbedring',
        description: 'Koselig soverom med innebygde skap og moderne finish.',
        images: [
            '/projects/project-4/131033347_1130474230744358_9185864262264180519_n.jpg',
            '/projects/project-4/131286129_1130474167411031_6305891915664981449_n.jpg',
            '/projects/project-4/131286945_1130474170744364_3353432983706027916_n.jpg',
            '/projects/project-4/131302957_1130474224077692_2704044684090623020_n.jpg'
        ],
        mainImage: '/projects/project-4/131033347_1130474230744358_9185864262264180519_n.jpg'
    },
    {
        id: 'project-5',
        title: 'Garasjebygging',
        description: 'Ny garasje med moderne design og funksjonelle løsninger.',
        images: [
            '/projects/project-5/106012765_1000699097055206_901171312187759093_n.jpg',
            '/projects/project-5/106097715_1000698973721885_7021671555954958971_n.jpg',
            '/projects/project-5/106134964_1000699030388546_8813291048160137992_n.jpg',
            '/projects/project-5/106247572_1000699117055204_4456303343505534921_n.jpg',
            '/projects/project-5/106297707_1000699020388547_3742152825019130347_n.jpg'
        ],
        mainImage: '/projects/project-5/106012765_1000699097055206_901171312187759093_n.jpg'
    },
    {
        id: 'project-6',
        title: 'Terrasse og Uteplass',
        description: 'Vakker terrasse med kvalitetsmaterialer og solid konstruksjon.',
        images: [
            '/projects/project-6/71520982_832343870557397_5898864859222638592_n.jpg',
            '/projects/project-6/75388173_826265624498555_1906310608580509696_n.jpg',
            '/projects/project-6/76713928_826265561165228_8770608640483655680_n.jpg',
            '/projects/project-6/76948663_826265581165226_4636489905533353984_n.jpg',
            '/projects/project-6/78169780_832343897224061_3544583853089751040_n.jpg'
        ],
        mainImage: '/projects/project-6/71520982_832343870557397_5898864859222638592_n.jpg'
    },
    {
        id: 'project-7',
        title: 'Vindusutskifting',
        description: 'Profesjonell utskifting av vinduer for bedre isolasjon.',
        images: [
            '/projects/project-7/58375341_684058872052565_7608059077624594432_n.jpg',
            '/projects/project-7/58383032_684058888719230_7396567925827567616_n.jpg'
        ],
        mainImage: '/projects/project-7/58375341_684058872052565_7608059077624594432_n.jpg'
    },
    {
        id: 'project-8',
        title: 'Takarbeider',
        description: 'Komplett takrenovering med nye materialer og isolasjon.',
        images: [
            '/projects/project-8/49243636_625843964540723_2527748696494309376_n.jpg',
            '/projects/project-8/49682571_625843751207411_8795415967858425856_n.jpg',
            '/projects/project-8/49731865_625843857874067_2241586308440915968_n.jpg',
            '/projects/project-8/49864558_625843914540728_59699985284857856_n.jpg',
            '/projects/project-8/49899862_625843737874079_7499570437110628352_n.jpg',
            '/projects/project-8/49948270_625843841207402_4010155108225515520_n.jpg',
            '/projects/project-8/50051926_625843897874063_13995395747151872_n.jpg',
            '/projects/project-8/50057664_625843937874059_5692655546537082880_n.jpg',
            '/projects/project-8/50151392_625843877874065_7229677784606441472_n.jpg',
            '/projects/project-8/50257619_625843784540741_3909396841908666368_n.jpg',
            '/projects/project-8/50428370_625843811207405_6743028423414775808_n.jpg'
        ],
        mainImage: '/projects/project-8/49243636_625843964540723_2527748696494309376_n.jpg'
    },
    {
        id: 'project-9',
        title: 'Husrenovering',
        description: 'Omfattende renovering av eldre bolig med moderne standarder.',
        images: [
            '/projects/project-9/34963729_465011530623968_5935512865971634176_n.jpg',
            '/projects/project-9/35142948_465011487290639_3744644709637685248_n.jpg',
            '/projects/project-9/35142974_465011027290685_3430021853941334016_n.jpg',
            '/projects/project-9/35146389_465011280623993_2076598348105646080_n.jpg',
            '/projects/project-9/35164888_465011340623987_4143439758875426816_n.jpg',
            '/projects/project-9/35166829_465011167290671_887571742090854400_n.jpg',
            '/projects/project-9/35195628_465011497290638_7279601565332144128_n.jpg',
            '/projects/project-9/35198191_465011273957327_4342797327413542912_n.jpg',
            '/projects/project-9/35239409_465011143957340_5565259583812796416_n.jpg',
            '/projects/project-9/35265957_465011383957316_3761558514187632640_n.jpg',
            '/projects/project-9/35265961_465011347290653_5438160287364546560_n.jpg',
            '/projects/project-9/35265992_465011473957307_1307495389020028928_n.jpg',
            '/projects/project-9/35266903_465011307290657_2274378723048292352_n.jpg',
            '/projects/project-9/35282726_465011450623976_535322103843389440_n.jpg',
            '/projects/project-9/35282779_465011363957318_2820312853561475072_n.jpg',
            '/projects/project-9/35303837_465011107290677_413597937491247104_n.jpg',
            '/projects/project-9/35331256_465011300623991_5522188187184660480_n.jpg'
        ],
        mainImage: '/projects/project-9/34963729_465011530623968_5935512865971634176_n.jpg'
    },
    {
        id: 'project-10',
        title: 'Moderne Tilbygg',
        description: 'Stilrent tilbygg som utvider boligarealet betydelig.',
        images: [
            '/projects/project-10/489296851_2184228658702238_5455681672976689930_n.jpg',
            '/projects/project-10/489930350_2184228632035574_5947125387178854219_n.jpg'
        ],
        mainImage: '/projects/project-10/489296851_2184228658702238_5455681672976689930_n.jpg'
    },
    {
        id: 'project-11',
        title: 'Innvendig Oppussing',
        description: 'Omfattende innvendig renovering med moderne materialer og design.',
        images: [
            '/projects/project-11/488220824_2180745379050566_4943020003015460210_n.jpg',
            '/projects/project-11/488221566_2180745385717232_4780143348625175090_n.jpg',
            '/projects/project-11/488581623_2180745282383909_9140438318457290718_n.jpg',
            '/projects/project-11/488650320_2180745399050564_4237513333368283703_n.jpg',
            '/projects/project-11/488651574_2180745675717203_783418126365011144_n.jpg',
            '/projects/project-11/488967764_2180745352383902_6596219046540462608_n.jpg',
            '/projects/project-11/489121913_2180745375717233_626389499327691535_n.jpg',
            '/projects/project-11/489439835_2180745279050576_7766773361124412282_n.jpg',
            '/projects/project-11/489450452_2180745389050565_7521974294761586629_n.jpg',
            '/projects/project-11/489459926_2180745725717198_7718199087905400244_n.jpg'
        ],
        mainImage: '/projects/project-11/488220824_2180745379050566_4943020003015460210_n.jpg'
    },
    {
        id: 'project-12',
        title: 'Utvendig Vedlikehold',
        description: 'Profesjonelt utvendig vedlikehold og oppgradering av fasade.',
        images: [
            '/projects/project-12/488310545_2180491722409265_6285285221727971542_n.jpg',
            '/projects/project-12/488551577_2180492042409233_2046348260739507569_n.jpg',
            '/projects/project-12/489317188_2180492035742567_685723640098205663_n.jpg',
            '/projects/project-12/489439835_2180745279050576_7766773361124412282_n (1).jpg'
        ],
        mainImage: '/projects/project-12/488310545_2180491722409265_6285285221727971542_n.jpg'
    },
    {
        id: 'project-13',
        title: 'Spesialprosjekt',
        description: 'Skreddersydd løsning tilpasset kundens spesifikke behov.',
        images: [
            '/projects/project-13/488247229_2179395625852208_5902059984721394729_n.jpg',
            '/projects/project-13/488801969_2179395559185548_5666087771956864654_n.jpg'
        ],
        mainImage: '/projects/project-13/488247229_2179395625852208_5902059984721394729_n.jpg'
    },
    {
        id: 'project-14',
        title: 'Gulvarbeider',
        description: 'Profesjonell gulvlegging med høykvalitets materialer.',
        images: [
            '/projects/project-14/487868469_2179250669200037_2645687269873585909_n.jpg',
            '/projects/project-14/487874671_2179251079199996_5250108048181848460_n.jpg',
            '/projects/project-14/488360811_2179250599200044_4954907662556779241_n.jpg',
            '/projects/project-14/488492649_2179251032533334_198638445346113665_n.jpg',
            '/projects/project-14/488505556_2179250675866703_5859628976791396026_n.jpg',
            '/projects/project-14/488778978_2179251065866664_8876759389566656651_n.jpg',
            '/projects/project-14/488873141_2179251045866666_3316513244056466714_n.jpg'
        ],
        mainImage: '/projects/project-14/487868469_2179250669200037_2645687269873585909_n.jpg'
    },
    {
        id: 'project-15',
        title: 'Bygningsarbeider',
        description: 'Solid bygningsarbeid med fokus på kvalitet og holdbarhet.',
        images: [
            '/projects/project-15/487853931_2178498292608608_6437004496375703606_n.jpg',
            '/projects/project-15/487854873_2178498015941969_5388866229168361967_n.jpg',
            '/projects/project-15/488361292_2178498259275278_478665383253497208_n.jpg',
            '/projects/project-15/488481438_2178498042608633_9118656970624422149_n.jpg'
        ],
        mainImage: '/projects/project-15/487853931_2178498292608608_6437004496375703606_n.jpg'
    },
    {
        id: 'project-16',
        title: 'Konstruksjonsarbeider',
        description: 'Avanserte konstruksjonsarbeider med moderne teknikker.',
        images: [
            '/projects/project-16/487504595_2178372355954535_8445471286649269273_n.jpg',
            '/projects/project-16/487765978_2178372219287882_8444740335880258098_n.jpg',
            '/projects/project-16/487887304_2178372539287850_964394371043467230_n.jpg',
            '/projects/project-16/488214776_2178372525954518_94218620620512482_n.jpg'
        ],
        mainImage: '/projects/project-16/487504595_2178372355954535_8445471286649269273_n.jpg'
    },
    {
        id: 'project-17',
        title: 'Snekkerarbeider',
        description: 'Presise snekkerarbeider med tradisjonell håndverkskvalitet.',
        images: [
            '/projects/project-17/487855953_2178108719314232_4169060249794390027_n.jpg',
            '/projects/project-17/488017114_2178108455980925_997102779856238860_n.jpg',
            '/projects/project-17/488179834_2178108725980898_3066789325934918151_n.jpg',
            '/projects/project-17/488240799_2178108465980924_8081532394190030375_n.jpg',
            '/projects/project-17/488257179_2178108715980899_1467234223383605641_n.jpg',
            '/projects/project-17/488536439_2178108382647599_6392170643583036632_n.jpg'
        ],
        mainImage: '/projects/project-17/487855953_2178108719314232_4169060249794390027_n.jpg'
    },
    {
        id: 'project-18',
        title: 'Omfattende Renovering',
        description: 'Stor renoveringsprosjekt med mange detaljer og høy finish.',
        images: [
            '/projects/project-18/487893061_2176650059460098_3283766456231411736_n.jpg',
            '/projects/project-18/487922150_2176649716126799_5154976478891108083_n.jpg',
            '/projects/project-18/487949136_2176649706126800_461869310417233380_n.jpg',
            '/projects/project-18/488004168_2176650049460099_2839897710672032584_n.jpg',
            '/projects/project-18/488010171_2176649902793447_5571343131146378345_n.jpg',
            '/projects/project-18/488226918_2176649936126777_8896947594940880322_n.jpg',
            '/projects/project-18/488239245_2176649926126778_1872557244257684905_n.jpg',
            '/projects/project-18/488268771_2176649932793444_4789426207699013722_n.jpg',
            '/projects/project-18/488382977_2176650046126766_3068641811718048103_n.jpg',
            '/projects/project-18/488451405_2176649966126774_122614785097638515_n.jpg',
            '/projects/project-18/488499039_2176649982793439_3899097901744686049_n.jpg',
            '/projects/project-18/488538038_2176650056126765_6979636954047926553_n.jpg',
            '/projects/project-18/488541102_2176650126126758_6578289518548734994_n.jpg',
            '/projects/project-18/488599991_2176649906126780_6608953033659690732_n.jpg',
            '/projects/project-18/488644872_2176649949460109_394550731542088035_n.jpg'
        ],
        mainImage: '/projects/project-18/487893061_2176650059460098_3283766456231411736_n.jpg'
    },
    {
        id: 'project-19',
        title: 'Eksteriør Prosjekt',
        description: 'Vakker eksteriør løsning med moderne design og funksjonalitet.',
        images: [
            '/projects/project-19/487438134_2175370539588050_3774093272214086194_n.jpg',
            '/projects/project-19/487454905_2175370446254726_1861837479217640552_n.jpg',
            '/projects/project-19/487478839_2175370532921384_6515506247341114399_n.jpg'
        ],
        mainImage: '/projects/project-19/487438134_2175370539588050_3774093272214086194_n.jpg'
    },
    {
        id: 'project-20',
        title: 'Storprosjekt',
        description: 'Omfattende byggeprosjekt med mange faser og høy kompleksitet.',
        images: [
            '/projects/project-20/487108492_2174838709641233_8618862516059091585_n.jpg',
            '/projects/project-20/487167454_2174838732974564_6241530697417711029_n.jpg',
            '/projects/project-20/487195949_2174838789641225_5396036447427003198_n.jpg',
            '/projects/project-20/487197713_2174838779641226_6148594899331550736_n.jpg',
            '/projects/project-20/487203672_2174838459641258_2835036013251985410_n.jpg',
            '/projects/project-20/487213431_2174838702974567_6312125708395315855_n.jpg',
            '/projects/project-20/487308286_2174838449641259_3125908848183032956_n.jpg',
            '/projects/project-20/487376582_2174838469641257_5837838232472043978_n.jpg',
            '/projects/project-20/487431429_2174838686307902_4504460197932488583_n.jpg',
            '/projects/project-20/487509913_2174838772974560_372368679040261850_n.jpg',
            '/projects/project-20/487511369_2174838806307890_7099898321682316691_n.jpg',
            '/projects/project-20/487521736_2174838782974559_6359587170176180687_n.jpg',
            '/projects/project-20/487699923_2174838792974558_7426148210871850582_n.jpg',
            '/projects/project-20/487788784_2174838736307897_1550028430213386952_n.jpg',
            '/projects/project-20/488214593_2174838802974557_6346208952229492573_n.jpg'
        ],
        mainImage: '/projects/project-20/487108492_2174838709641233_8618862516059091585_n.jpg'
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [showAll, setShowAll] = useState(false);

    const featuredProject = projects.find(p => p.featured);
    const regularProjects = projects.filter(p => !p.featured);
    const displayedProjects = showAll ? regularProjects : regularProjects.slice(0, 3);

    const openLightbox = (project: Project, imageIndex: number = 0) => {
        setSelectedProject(project);
        setCurrentImageIndex(imageIndex);
        setIsOpen(true);
    };

    const nextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === selectedProject.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.images.length - 1 : prev - 1
            );
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') setIsOpen(false);
    };

    return (
        <section id="projects" className="bg-background py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-glow">
                        Våre <span className="text-primary">Prosjekter</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Se noen av våre nylige prosjekter og få inspirasjon til ditt neste byggeprosjekt.
                        Hver detalj er utført med presisjon og kvalitet.
                    </p>
                </motion.div>

                {/* Featured Project */}
                {featuredProject && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="construction-card overflow-hidden cursor-pointer group" onClick={() => openLightbox(featuredProject)}>
                            <div className="relative">
                                <img
                                    src={featuredProject.mainImage}
                                    alt={featuredProject.title}
                                    className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                                {/* Image Count Badge */}
                                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                                    <Images className="h-4 w-4 text-primary" />
                                    <span className="text-sm font-medium">{featuredProject.images.length}</span>
                                </div>


                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Regular Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="construction-card overflow-hidden cursor-pointer group"
                            onClick={() => openLightbox(project)}
                        >
                            <div className="relative">
                                <img
                                    src={project.mainImage}
                                    alt={project.title}
                                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                                {/* Image Count Badge */}
                                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                                    <Images className="h-3 w-3 text-primary" />
                                    <span className="text-xs font-medium">{project.images.length}</span>
                                </div>


                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Show More/Less Button */}
                {regularProjects.length > 3 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="btn-construction"
                        >
                            {showAll ? 'Vis Færre Prosjekter' : `Se Alle ${regularProjects.length} Prosjekter`}
                        </button>
                    </motion.div>
                )}

                {/* Lightbox Dialog */}
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent
                        className="max-w-6xl w-full h-[90vh] p-0 bg-background/95 backdrop-blur-sm"
                        onKeyDown={handleKeyDown}
                    >
                        {selectedProject && (
                            <div className="relative w-full h-full flex flex-col">
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-border/50">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground">
                                            {selectedProject.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Bilde {currentImageIndex + 1} av {selectedProject.images.length}
                                        </p>
                                    </div>
                                </div>

                                {/* Image Container */}
                                <div className="flex-1 relative overflow-hidden">
                                    <img
                                        src={selectedProject.images[currentImageIndex]}
                                        alt={`${selectedProject.title} - Bilde ${currentImageIndex + 1}`}
                                        className="w-full h-full object-contain"
                                    />

                                    {/* Navigation Buttons */}
                                    {selectedProject.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 p-3 rounded-full transition-all duration-200"
                                                aria-label="Forrige bilde"
                                            >
                                                <ChevronLeft className="h-6 w-6" />
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 p-3 rounded-full transition-all duration-200"
                                                aria-label="Neste bilde"
                                            >
                                                <ChevronRight className="h-6 w-6" />
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Thumbnail Strip */}
                                {selectedProject.images.length > 1 && (
                                    <div className="p-4 border-t border-border/50">
                                        <div className="flex gap-2 overflow-x-auto">
                                            {selectedProject.images.map((image, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all duration-200 ${index === currentImageIndex
                                                        ? 'border-primary'
                                                        : 'border-transparent hover:border-border'
                                                        }`}
                                                >
                                                    <img
                                                        src={image}
                                                        alt={`Thumbnail ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
};

export default Projects;
