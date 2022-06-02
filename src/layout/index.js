import React from 'react';

import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => (
    <main>
        <div className='content'>
        <h3>Content</h3>
            <div className="Children">
                {props.children}
            </div>
            <div className="info">
                <h3>Information</h3>
                <details>
                    <summary>OAuth 1.0</summary>
                    <ul>
                        <li>Open Authorization - Standard access delegation - normalt brugt til at give en hjemmeside eller applikation adgang til din(user) information på andre sider - men uden et password.</li>
                        <li>Dette bliver brugt til delen af information til 3rd party firmaer.</li>
                        <li>Eksempel: Google Account login på notion → Notion.so → Kalender fra google. Her logger du ind med din Google Account på Notion, hvorved Notion så kan tage din google kalender data og sætte det ind i en Notion.so kalender.</li>
                        <li>
                            Open Authorization essentielt tillader access tokens at blive brugt af third-party klienter via en “tilladt” server - med tilladelse af ressource ejeren.
                            <ul>
                                <li>OAuth Access Token - Ingen specifik format - typisk forskelligt fra sted til sted. Typisk er det Bearer Tokens hvilket er en Opaque String eller JWT some er en JSON token. Nogle bruger også “sender-constrianed” tokens, hvilket er en privat nøgle som klienten har, hvilket gør access token ubrugelig i sig selv hvis du ikke har din privat nøgle. </li>
                            </ul>
                        </li>
                        
                    </ul>
                </details>
                <details>
                    <summary>Lagdeling</summary>
                    <ul>
                        <li>Lag deling bliver typisk brugt i programmering til at separer programmerings logikken. Dette vil også typisk gøre så det er nemmere at ændre, og ikke skulle takle hele strukturen.</li>
                        <li>Bundlinje er en 3 lags model - Præsentation lageret → Applikations lageret → Data lageret.</li>
                        <ul>
                            <li>Præsentation: Viser vores indhold til brugeren via et GUI.</li>
                            <li>Applikation: Indeholder vores programmerings logik og regler.</li>
                            <li>Data: Her henter vi vores data typisk igennem en API.</li>
                        </ul>
                    </ul>
                </details>
                <details>
                    <summary>CORS</summary>
                    <ul>
                        <li>Cross - Origin Resource Sharing. Tillader en hjemmeside fra et URL at spørge om data fra en anden hjemmeside på et andet URL.</li>
                        <ul>
                            <li>Eksempel: Vi har fundet et billede url på en hjemmeside og vi vil gerne bruge det på vores egen - hvis der ikke var CORS ville vi ikke få et billede på vores hjemmeside. Eller vores hjemmeside prøver at fetch data fra vores API men får en fejlmelding med CORS header.</li>
                        </ul>
                    </ul>
                </details>
                <details>
                    <summary>JSON Web Token</summary>
                    <ul>
                        <li>Stateless hvor Cookie sessions are stateful.</li>
                        <li>Brugeren laver et post /user/login bliver sendt til serveren hvorved serveren laver en JWT for brugeren med dens egen hemmelighed. JSON Web Token bliver så sendt tilbage til brugere og gemt, når brugere så f.eks. går til en ny side, sender den den JSON Web Token tilbage til serveren, hvor serveren tjekker tokens signature og hemmelighed og finder brugeren udfra Token. Så bliver responset sendt tilbage til brugeren.</li>
                        <li id="jwt-examples"><span class="jwt-header">Header</span><span class="jwt-payload">Payload</span><span class="jwt-signature">Signature</span></li>
                        <li class="jwt-token-example">
                            <span class="jwt-token-example-span">
                                <span class="jwt-header">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span>.<span class="jwt-payload">eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFsZXhhbmFkZXIiLCJpYXQiOjE1MTYyMzkwMjJ9</span>.<span class="jwt-signature">0Mmdq1BOsA1cEcLNB8gF4sE-qODQiHY4jhlFvlmDEpc</span>
                            </span>
                        </li>
                        <ul class="jwt-links">Links:
                            <li class="jwt-links"><a href="https://jwt.io/introduction">jwt.io</a></li>
                            <li class="jwt-links"><a href="https://datatracker.ietf.org/doc/html/rfc7519">RFC7519</a></li>
                            <li class="jwt-links"><a href="https://www.npmjs.com/package/jsonwebtoken">jsonwebtoken</a></li>
                        </ul>
                    </ul>
                </details>
                <details>
                    <summary>Routing</summary>
                    <ul>
                        <li>Routes er det der skifter vores state / view - hvis vores user trykker på en knap så vil vores route / content skiftes til den route som der er blevet givet.</li>
                        <li>Routes vil kigge på vores URL - hvis vores URL skifter vil vores content i vores <code>view div</code> ændre sig baseret på det URL. Så hvis vi kligger på kontakt knappen, så vil vores URL skifte til <code>#/contact</code> og give os vores kontakt info i vores <code>view div</code>.</li>
                        <li>Routes bruger DOM(Document Object Model) hvilket betyder vores indhold stort set kun lever i vores <code>view div</code> Dette er klaret ved hjælp af templates der vil blive brugt til kontent.</li>
                    </ul>
                </details>
            </div>
        </div>
    </main>
)

export { Layout, Nav, Footer };