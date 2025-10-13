import Header from './component/Header'
import Entry from './component/Entry'

export default function App(){
    return (
        <main>
            <div id="travel-journal-container">
                <Header />
                <article>
                    <Entry />
                </article>
            </div>
        </main>
    );
}