import Paragraph from "@/components/paragraph";

export default function Home() {
    return (
        <div className="relative w-full font-[family-name:var(--font-geist-sans)]">
            <div className="fixed w-1/3 left-0 top-0 h-screen bg-[#D9D9D9] flex flex-col justify-center place-items-center">
                <div className="my-8 w-1/2">
                    <h1 className="text-5xl font-semibold mb-2">The Canadian</h1>
                    <h2 className="text-2xl">Sohum Padhye</h2>
                </div>
{/* 
                <div className="my-8 w-1/2">
                    <h1 className="text-3xl font-semibold">Other News</h1>
                    
                </div> */}
            </div>
            <div className="absolute w-2/3 right-0 top-0 h-full flex justify-center place-items-start py-24">
                <div className="flex flex-col w-3/5 place-items-center">
                    <img src="/trudeau-speaking.png" className="mb-12 shadow-[0_0_20px_0_rgba(0,0,0,0.6)]" />
                    <div className="mb-6">
                        <h1 className="text-4xl font-semibold mb-6 text-center">Trudeau: The Ultimate Survivalist?</h1>
                        <p className="text-xl text-pretty text-center">{`How Trudeau's post-pandemic plan taught us the art of survival`}</p>
                    </div>
                    <div>
                        <Paragraph content={`Canada had a world-class immigration plan for the past 150 years that helped strengthen our economy, reunite families, and help refugees. About 275,000 immigrants per year were admitted from 2000 to 2021. However, post-pandemic Canadians experienced severe unemployment, inflation, and mental health issues as we tried to recover our economy. To address this challenge, the Trudeau government decided to almost double immigration targets to half a million per year. And it seemed to be going pretty well! Thumbs up! That is, until recently where we're now observing that it’s actually going great! Double thumbs up!`}/>
                        <Paragraph content={`When creating this masterpiece of a plan, Trudeau had a great vision, and great execution, too. Upon increasing the immigration targets, you’d think a Prime Minister would do something to address the growing population (and therefore growing needs of citizens) that is to come. But Trudeau did something possibly even more genius. `} />
                        <Paragraph header={`Invite Trudeau to live with you and your 20 groupmates!`} content={`You see, by creating initiatives to accordingly support this growing population, he would be taking valuable experience away from us--valuable experience that could be used to hone our survival skills. Newcomers may wonder, “Will there be enough housing to fit us comfortably?”`} />
                        <Paragraph content={`Pfft. We don’t need that. This “housing crisis” is just a hoax made up by right-wing conservatives to protect the rich people’s mansions. We have ample housing. Why build more houses and destroy the environment, when 20 people can comfortably live in one house, like we’ve seen in Brampton? They’ve done it easily, and so can the rest of Canada.`} />
                        <Paragraph content={`Trudeau’s been so valuable to Canadians by showing us how greedy we've become with space, and offering a way to show that we can become better human beings by coexisting more efficiently, thereby enhancing our ability to survive.`} />
                        <Paragraph header={`Invite him over for dinner!`} content={`Also, he, completely intentionally, indirectly increased prices of foods! While this may seem bad, think about it like this: all those “healthy” organic foods that you feed your children? Nope! Too expensive! Instead, we now have the opportunity to feed our children McDonald’s and 2-litre bottles of Coke, and that’ll make them big and strong by conditioning their immune systems! And in the event that even those beloved foods become too expensive, we can always, always rely on food banks.`} />
                        <Paragraph header={`He cares, it just takes some time!`} content={`And speaking of health, Trudeau displays the high regard to which he holds healthcare professionals, as he does with his perfect, universally beneficial plans. You might raise an eyebrow when you hear, “We’re increasing the number of people that healthcare professionals have to deal with, but not the actual number of healthcare professionals.”`} />
                        <Paragraph content={`But don’t you understand the underlying ingenuity? He loves them so much that he’s willing to let them shine and show their true capabilities! He’s trying to say to everyone in the world, “Look at our healthcare! It’s perfect the way it is!”`} />
                        <Paragraph content={`And it’s true. In other countries, the naive healthcare systems would admit people in critical condition right away. Now, though, when in a life-or-death situation and needing emergency care, you can give them a few hours to prepare so they can save you! (Please bear in mind that you will have to survive on your own during that time)`} />
                        <Paragraph header={`Jobs for (almost) everyone!`} content={`Some people (pessimists, really) have some concerns about Trudeau’s plan. Can you imagine? Some say, won’t this ambitious immigration target potentially lead to too much competition in the already-strained job market? While this question seems logical, Trudeau delivers such a well thought-out, eloquent response. And it makes sense once you think about it! Here it is:`} />
                        <Paragraph content={`You see, this increase in competition for jobs is actually perfect for Canada! It’ll encourage students to do better in school and discover their passions more quickly. And… well… if they can’t find a job… then it’s just natural selection, right? Yeah. It’s never Trudeau’s fault, only ours. Because Trudeau is never, ever wrong.`} />
                        <Paragraph header={`You know who to thank`} content={`So, I think I can speak for all of us when I say that Trudeau has shown us how to become real survivalists. Through his masterful planning, attention to detail, and consideration of all perspectives, he has really come up with the best plan to bring our economy back. So the next time you’re ever having doubts and feeling like being a whiny baby--”The food’s too expensive!” “I can’t buy a house!” “I can’t find any jobs!” “My urgent heart surgery is taking years to get through the healthcare system!”--just remember that it’s now your responsibility to figure it out, courtesy of the one and only Justin Trudeau.`} />
                    </div>
                    <div className="my-12 w-full bg-[#EEEEEE] py-4 flex justify-center shadow-[0_0_10px_0_rgba(0,0,0,0.3)]">
                        <div className="w-4/5">
                            {`Implicit thesis: The Liberal Party’s post-pandemic immigration policies left Canadians ill-equipped to deal with rising populations, as they put immigration policies into play yet didn’t match them accordingly with initiatives to support the subsequent population growth.`} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}