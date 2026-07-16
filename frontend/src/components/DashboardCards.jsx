function DashboardCards({

stats

}) {

    const cards=[

    {

    title:"Papers",

    value:stats.papers,

    icon:"📄"

    },

    {

    title:"Chunks",

    value:stats.chunks,

    icon:"🧩"

    },

    {

    title:"Embedding",

    value:stats.embedding,

    icon:"🧠"

    },

    {

    title:"Model",

    value:stats.model,

    icon:"🤖"

    }

    ];

    return (

        <div className="grid grid-cols-4 gap-6 mb-6">

            {

                cards.map((card,index)=>(

                    <div

                        key={index}

                        className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-lg hover:border-blue-500 transition"

                    >

                        <div className="text-3xl mb-3">

                            {card.icon}

                        </div>

                        <p className="text-gray-400 text-sm">

                            {card.title}

                        </p>

                        <h2 className="text-2xl font-bold text-white mt-2">

                            {card.value}

                        </h2>

                    </div>

                ))

            }

        </div>

    );

}

export default DashboardCards;