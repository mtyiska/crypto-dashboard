import SideBar from "../SideBar"

import Header from "../Header"
import Head from "next/head"

import {
    MdDonutLarge,
    MdOutlineClearAll,
    MdSyncAlt,
    MdEco,
} from "react-icons/md";
import {
    AiOutlineArrowUp,
    AiOutlineArrowDown,
    AiOutlineLock,
} from "react-icons/ai";
import {
    FiLayers,
} from "react-icons/fi";
import Link from 'next/link'


const Layout = ({children}) => {
    return (
    <>
    <Head>
        <title>Crypto Dashboard</title>
    </Head>

    <div className="flex">
        {/* logos */}

        <div className="bg-gray-900 w-20 flex-none flex-col min-h-screen h-screen overflow-y-auto px-2 py-2 divide-y-2">
        
            <div className="space-y-2 py-2">
                <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                <Link href="/dashboard">
                    <a><DonutLargeIcon/></a>
                </Link>
                </div>
                <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                    <Link href="/about">
                    <a><ClearAllIcon/></a>
                    </Link>
                </div>
                <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                    <ArrowUpwardIcon/>
                </div>
                <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                    <ArrowDownwardIcon/>
                </div>
                <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                    <SyncAltIcon/>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                    <LockIcon/>
                </div>
                <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                    <EcoIcon/>
                </div>
            </div>

            <div className="space-y-2 py-2">
                <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                    <LayersIcon/>
                </div> 
            </div>

        </div>

        
        <div className="flex flex-col min-h-screen h-screen">
            {/* Top bar */}
            <div className="bg-red-500 flex">
                <div className="bg-red-300 w-56 flex-none">TailWind Css</div>
                    <div>Rest of top bar</div>
            </div>
        
            {/* 2nd bar */}
            <div className="flex-1 bg-blue-500 flex overflow-y-hidden">

                {/* 2nd left */}
                <div className="bg-green-300 w-56 flex-none flex flex-col justify-between">
                    <div className="overflow-y-auto">
                    Hashtag sidebar. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam suscipit quidem cum consectetur, accusamus maiores obcaecati! Minus, cum. Consequuntur quisquam asperiores sint cumque dolorem alias, eos consectetur deleniti perferendis error! Quidem provident perspiciatis laudantium eius modi odio blanditiis eligendi maxime nisi quisquam! Saepe natus modi, perferendis quidem distinctio harum facilis perspiciatis architecto quibusdam earum maxime recusandae totam repudiandae maiores? Tempore, dolore! Ut odit delectus sequi eum, harum ipsa ducimus praesentium recusandae ipsam debitis quibusdam eaque architecto quidem reiciendis aut fuga cumque voluptate! Quod asperiores ipsam autem ipsa fugit, modi, soluta rem libero ipsum a at totam iusto, facilis perferendis magni optio eveniet cumque ea magnam qui enim? Iure blanditiis non iusto. Maxime doloribus mollitia adipisci saepe iste porro qui quidem vitae consequuntur esse numquam minus non pariatur, itaque consectetur, rem incidunt reprehenderit animi eius doloremque, aperiam quas tempore facilis inventore? Excepturi expedita, et impedit soluta distinctio explicabo neque molestiae nesciunt cumque. Eius culpa veritatis quam, hic, accusantium totam provident sint vel officiis maxime possimus! Numquam porro magni illo quisquam, incidunt expedita quos impedit quis iure dignissimos ducimus omnis aliquam veniam autem quibusdam repellat non distinctio facilis repudiandae deserunt cumque quas similique unde. Provident dolorem sed magni perferendis, saepe assumenda illo.
                    </div>
                    <div className="bg-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tenetur dolores nobis magnam iusto distinctio doloremque. .</div>
                </div>
                
                {/* 2nd Right */}
                <div className="bg-green-500 flex-1 flex justify-between">


                    {/* container */}
                    <div className="bg-indigo-300 flex-1 flex flex-col justify-between">
                        <div className="overflow-y-auto">
                        Container. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, nemo corrupti unde incidunt fuga tenetur voluptatibus sequi animi beatae atque, repudiandae nostrum modi nulla adipisci possimus est officiis saepe ipsum maiores corporis reprehenderit ratione iste delectus. Temporibus tempora ea totam minus soluta voluptatum dolor sed repudiandae odit, delectus sint adipisci eligendi eius quas placeat nulla autem cum maiores excepturi sit dicta ex maxime illo? Reprehenderit ea tempore amet aspernatur minima asperiores omnis totam culpa repudiandae. Vero, iure. Excepturi, tempora, dolorum, iusto placeat quisquam reprehenderit modi assumenda id eos ea numquam soluta voluptatum? Illo corrupti provident culpa dolore. Laudantium eos quae ex vero repudiandae aspernatur nam harum, quia atque corrupti? Numquam blanditiis fugiat hic magnam consequatur similique cumque esse harum, impedit suscipit voluptas saepe sapiente? Voluptates sit sapiente harum. Molestias at iste pariatur ipsa officia consequatur, ea assumenda expedita, ratione sed nisi laboriosam! Commodi, asperiores. Delectus ex et cumque a, placeat ab necessitatibus sunt recusandae, molestiae ipsum vitae impedit cupiditate pariatur! Adipisci amet, deserunt, culpa pariatur dolores doloremque expedita quia laudantium autem cum quasi consectetur officia in aspernatur, praesentium maiores laboriosam a labore. Accusamus laborum nesciunt vitae placeat? Hic facere officiis ullam odit provident ad cupiditate, perferendis ipsa asperiores laudantium velit sed quaerat voluptate facilis nesciunt aspernatur non? Consequatur nisi dignissimos beatae totam perspiciatis doloribus quia harum nam? Enim veniam tempora, ipsum molestiae vitae aliquid corporis atque, maiores saepe fuga commodi. Nesciunt magnam architecto delectus, sit unde quis consequatur vitae quam accusantium sed atque nam tenetur laborum nisi numquam incidunt ratione cupiditate voluptatibus eos ex? Sed, earum magnam eum dolor error eius beatae blanditiis corporis, dolores sit, hic soluta illum culpa amet placeat nisi? Similique suscipit labore nostrum aperiam nisi ipsa repellat laudantium consectetur tempore temporibus, accusantium rem quis. Facere dignissimos quis quaerat ipsa totam, tempore quia voluptate fugiat expedita ad, dolore sapiente? Iste culpa labore assumenda at quasi voluptatibus alias ab totam, consequuntur itaque vero quia earum corrupti rerum voluptatum reprehenderit, sit quod libero adipisci vel eos explicabo fugit? Ullam quo libero est quae deserunt ut assumenda soluta dignissimos quod nihil reprehenderit cumque alias corporis, aperiam, saepe illo impedit, ex aliquam cum ratione tempora? Veniam totam voluptatibus placeat possimus eligendi iusto, quos perspiciatis blanditiis obcaecati aspernatur deserunt libero dolores? Numquam tenetur ipsa aperiam explicabo tempore, recusandae saepe nemo dignissimos magni, et exercitationem iste in quas! At ullam perferendis deserunt iure, exercitationem soluta magni, dolores laborum laudantium reprehenderit quo repudiandae. Porro officia corporis, possimus, explicabo quaerat commodi, atque laboriosam quod accusamus sapiente veniam dolor placeat saepe doloremque omnis. Corrupti, et. Suscipit consequuntur voluptatibus cumque doloremque saepe ratione autem obcaecati error. Omnis harum molestias ad praesentium explicabo distinctio aliquam. Minus neque cumque pariatur cum sint nihil suscipit quos error assumenda quod at ab repellendus eaque est officiis ullam, illo id dolore vero. Sint ex quae assumenda quos minus fugiat corrupti voluptatem perferendis dolor! Veritatis tenetur laudantium porro illum rem hic vero. Magnam voluptates doloremque laborum eius harum, placeat ducimus quae unde sint fugiat modi, autem non odit? Mollitia non recusandae debitis? Ab ipsum mollitia asperiores dolores magni amet aut, quia earum consectetur facilis vero tempora, excepturi ad omnis veniam cupiditate in est quam neque quaerat non deleniti ex recusandae doloribus. Aliquid nesciunt alias quo possimus eaque quisquam voluptatibus sit deleniti cumque, fuga ducimus asperiores accusamus placeat vitae corporis nihil ratione laudantium atque! Doloremque distinctio sequi maxime id repellat non harum expedita quae consequatur, nam esse nostrum accusamus soluta cumque natus? Sint ullam fugit, nobis explicabo non fuga atque laborum reprehenderit! Numquam quasi, distinctio alias at ea quod dolorum nisi assumenda laborum dolore exercitationem impedit. Repudiandae vel blanditiis beatae quisquam atque aliquid, laudantium adipisci, fugit commodi optio esse animi inventore? Soluta deleniti modi, delectus, aliquid dicta veniam quas omnis, in aspernatur corrupti hic eveniet! Incidunt aliquid exercitationem velit, cupiditate nisi temporibus placeat. Dicta perferendis corrupti quibusdam. Laborum magnam beatae expedita reiciendis laudantium dicta tenetur omnis esse doloremque distinctio aliquid quos vitae animi quis, repellendus tempora aut eum sint minus inventore architecto commodi. Corporis autem assumenda, officiis voluptatum consequuntur, tempora eum saepe minima cumque eaque officia velit ex? Modi officia optio totam voluptates maiores, a nisi inventore rerum molestias ducimus dicta excepturi libero minima? Sunt provident facere voluptates, fuga asperiores sit sapiente assumenda inventore recusandae deleniti exercitationem perspiciatis, tempora praesentium iure rerum ad illum laborum veritatis repellat reiciendis atque sint accusamus? Suscipit alias distinctio expedita doloremque. Explicabo incidunt provident ipsam, error voluptates rerum magnam soluta consequatur quaerat debitis libero nihil itaque quasi in illo molestias excepturi. Dicta quidem praesentium ipsa nemo architecto nam nostrum non obcaecati quo illo maiores reprehenderit, explicabo, et aperiam quas, ex numquam. Dicta temporibus libero exercitationem facere tenetur dignissimos explicabo voluptatum quaerat. Atque at nostrum iusto recusandae delectus, tempora ullam harum rerum vitae placeat neque alias omnis voluptatem. Optio sequi ab voluptate ipsum at pariatur. Corporis asperiores numquam nihil eveniet, cupiditate ducimus. Inventore iusto ipsa explicabo porro amet earum vitae excepturi molestias? Tenetur dicta voluptas praesentium nisi aperiam porro repellat corporis voluptates voluptatem repudiandae voluptate pariatur blanditiis dolore, in vitae numquam reprehenderit ab esse asperiores recusandae mollitia laboriosam hic! Laudantium, aut sunt libero animi minima maxime quam veniam ullam, atque in dolore voluptatum enim dolorem amet maiores, natus harum sed voluptatibus reiciendis repudiandae provident quisquam? At tenetur voluptate non reprehenderit totam velit iste sit fugit incidunt harum mollitia eius assumenda, officia ab? Obcaecati labore molestiae, ex ipsa laudantium iusto quos reiciendis ut cumque fugiat quia est saepe repellendus in velit minima ratione eaque doloremque beatae, et amet. Deserunt doloremque quam, accusantium a quaerat aliquam, cum pariatur quae labore aliquid veritatis dolores quas? Veritatis quaerat eius officiis rem. Error mollitia, architecto nesciunt harum possimus similique voluptatem ea odit dicta! Quaerat sunt libero iusto possimus mollitia necessitatibus vitae, accusamus natus temporibus cum in inventore quis officiis incidunt vero suscipit distinctio, sed tempore ea eaque? Quaerat necessitatibus voluptatibus magnam, tempora dolor dolorem quo tenetur doloribus reiciendis, perspiciatis eligendi velit! Cumque reiciendis corporis id dolorum tenetur cupiditate numquam, fugit aut natus tempora voluptatibus eveniet accusamus dolor totam quo repellendus repellat velit ipsam? Cupiditate at ipsa, sit iure qui facere earum quae consectetur commodi voluptatibus consequatur? Magnam sunt ullam nulla sequi, odit dolorem aperiam eligendi veritatis consectetur, id quas assumenda repudiandae molestiae dignissimos enim qui tempora fugit cupiditate iste molestias, voluptatem exercitationem possimus. Modi nulla eius in recusandae quae fugit, ex provident vero, mollitia officia corrupti eum cumque. Accusantium iusto quo id, sed, animi ducimus perspiciatis consectetur, dolores facere ipsum atque nobis asperiores? Voluptatibus ullam ipsum unde, officiis dolore quas vel. Odit autem nostrum aspernatur consectetur quia asperiores dolorum veritatis doloribus sequi at quo, exercitationem rem corporis placeat totam quis! Officia ex at aliquam voluptatem laudantium soluta, repudiandae nemo hic qui in quam, vitae magnam eius numquam blanditiis harum? Rerum adipisci similique nostrum voluptatum voluptatibus beatae magnam magni nobis culpa explicabo, debitis, distinctio, dolor perspiciatis repudiandae veritatis eos aperiam. A libero alias culpa itaque asperiores quibusdam sequi id similique soluta officiis suscipit odit vel expedita cupiditate vero dicta voluptates debitis maxime, consequatur laborum blanditiis eos, corrupti ea excepturi. Vitae id perspiciatis ullam, possimus, placeat modi dignissimos facere ut dolorum quam quidem cum. Pariatur quod reiciendis ut nisi provident, tenetur necessitatibus corporis odit suscipit repudiandae, inventore, laudantium dignissimos tempore officiis ipsam? Rerum nesciunt omnis eos. Sunt.
                        </div>
                        <div className="bg-gray-500">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, aut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, aut!
                        </div>
                    </div>

                    {/* right side */}
                    <div className="bg-indigo-600 w-56 flex-none overflow-y-auto">Righ Side. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo, accusantium harum impedit at ratione ad modi iste nemo adipisci consequuntur! Magni pariatur amet dicta, alias earum labore repellendus incidunt. Illo, nobis quisquam qui eveniet aperiam in eaque ad, ut, deserunt maiores consectetur. Tempora similique quam, earum eum, molestias hic animi numquam, deserunt eligendi tenetur dolor doloremque! Officiis impedit magni beatae exercitationem odit quibusdam quo perspiciatis in, asperiores cum, hic molestias animi, assumenda optio ex! Vel voluptatibus eveniet reprehenderit impedit dolores sed, quis nesciunt accusantium unde culpa repellendus esse ipsam doloribus modi fuga repellat facilis explicabo! Enim odit corrupti, accusantium, necessitatibus, aut blanditiis nemo rem unde voluptatibus in totam laboriosam? Veniam eum, voluptatem esse voluptatibus quis modi natus autem voluptas architecto! Nesciunt quas consequatur laborum alias porro aliquid deserunt, repellendus quaerat ut nisi. Provident alias vitae sit consequatur obcaecati at nobis aliquid odit excepturi optio esse id ut quia cumque nemo, quod ea corporis aliquam cum accusamus ipsam. Deleniti, possimus? Dolorem qui, sunt temporibus unde ea velit inventore eos, excepturi officiis delectus consectetur odio officia ratione repellendus saepe pariatur fugit nisi, fugiat perferendis? Ratione est laborum molestiae dolorum? Numquam odio, quaerat ut commodi fuga modi perferendis saepe consequatur beatae quasi sunt tempora ea excepturi ducimus quisquam provident repellendus dolore in recusandae rerum animi! Nihil voluptatum libero illo consequuntur sed asperiores eos quasi laborum iure error in minus quo placeat corporis ex doloremque, dolores suscipit quibusdam, vero, maiores mollitia quia minima. Eum minus molestias at, dolorem qui laboriosam aut quod, sequi, dignissimos enim eos. Neque aperiam rerum dolorem quasi a ratione possimus quisquam voluptatem, officiis expedita dignissimos qui exercitationem adipisci et libero dolorum ea. Earum dolores vel blanditiis dicta officiis vitae deserunt sint tempora, illo reiciendis iste repellat similique alias ipsam facilis tenetur corrupti quod obcaecati debitis eos ipsum voluptates voluptatum.</div>
                </div>
            </div>
        </div>

    </div>
    </>
      

    )
}
const DonutLargeIcon = () => (<MdDonutLarge size="32" className="text-gray-300"/>);
const ClearAllIcon = () => <MdOutlineClearAll size="32" className="text-gray-300" />;
const ArrowUpwardIcon = () => <AiOutlineArrowUp size="32" className="text-gray-300" />;
const ArrowDownwardIcon = () => <AiOutlineArrowDown size="32" className="text-gray-300" />;
const SyncAltIcon = () => <MdSyncAlt size="32" className="text-gray-300" />;
const LockIcon = () => <AiOutlineLock size="32" className="text-gray-300" />;
const EcoIcon = () => <MdEco size="32" className="text-gray-300" />;
const LayersIcon = () => <FiLayers size="32" className="text-gray-300" />;


export default Layout
