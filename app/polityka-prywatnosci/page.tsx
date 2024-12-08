export default function PrivacyPolicy() {
  return (
    <div className="lg:px-6 [&_a]:underline [&_li]:ml-4 [&_ol>li]:my-1 [&_ol>ul>li]:ml-6 [&_ol]:list-decimal [&_ul]:list-disc">
      <h1 className="mb-6 text-3xl font-medium sm:text-4xl lg:mb-10 2xl:text-5xl">
        Polityka prywatności
      </h1>
      <p className="mb-6 text-base lg:mb-10 lg:text-lg">
        Polityka prywatności opisuje zasady przetwarzania przez nas informacji na Twój temat, w tym
        danych osobowych oraz ciasteczek, czyli tzw. cookies.
      </p>
      <div>
        <h2 className="mb-2 mt-4 font-heading text-xl font-medium sm:text-xl lg:mb-3 lg:mt-6 lg:text-2xl">
          <strong>1. Informacje ogólne</strong>
        </h2>
        <ol>
          <li>
            Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url:{' '}
            <a href="https://jgdev.pl">jgdev.pl</a>
          </li>
          <li>
            Operatorem serwisu oraz Administratorem danych osobowych jest: Jakub Grzymisławski
          </li>
          <li>Adres kontaktowy poczty elektronicznej operatora: grzymislawski.jakub@gmail.com</li>
          <li>
            Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych
            dobrowolnie w Serwisie.
          </li>
          <li>Serwis wykorzystuje dane osobowe w następujących celach:</li>
          <ul>
            <li>Obsługa zapytań przez formularz</li>
            <li>Prezentacja oferty lub informacji</li>
          </ul>

          <li>
            Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w
            następujący sposób:
            <ul>
              <li>
                Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do
                systemów Operatora.
              </li>
              <li>
                Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).
              </li>
            </ul>
          </li>
        </ol>
        <h2 className="mb-2 mt-4 font-heading text-xl font-medium sm:text-xl lg:mb-3 lg:mt-6 lg:text-2xl">
          <strong>2. Wybrane metody ochrony danych stosowane przez Operatora</strong>
        </h2>
        <ol>
          <li>
            Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji
            (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie,
            zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym
            serwerze.
          </li>
          <li>
            Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania,
            wykorzystywanego przez Operatora do przetwarzania danych osobowych, co w szczególności
            oznacza regularne aktualizacje komponentów programistycznych.
          </li>
        </ol>
        <h2 className="mb-2 mt-4 font-heading text-xl font-medium sm:text-xl lg:mb-3 lg:mt-6 lg:text-2xl">
          <strong>3. Hosting</strong>
        </h2>
        <ol>
          <li>
            Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: vercel.com
          </li>
          <li>
            Firma hostingowa w celu zapewnienia niezawodności technicznej prowadzi logi na poziomie
            serwera. Zapisowi mogą podlegać:
            <ul>
              <li>
                zasoby określone identyfikatorem URL (adresy żądanych zasobów – stron, plików),
              </li>
              <li>czas nadejścia zapytania,</li>
              <li>czas wysłania odpowiedzi,</li>
              <li>nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP,</li>
              <li>informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP,</li>
              <li>
                adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) – w
                przypadku gdy przejście do Serwisu nastąpiło przez odnośnik,
              </li>
              <li>informacje o przeglądarce użytkownika,</li>
              <li>informacje o adresie IP,</li>
              <li>
                informacje diagnostyczne związane z procesem samodzielnego zamawiania usług poprzez
                rejestratory na stronie,
              </li>
              <li>
                informacje związane z obsługą poczty elektronicznej kierowanej do Operatora oraz
                wysyłanej przez Operatora.
              </li>
            </ul>
          </li>
        </ol>
        <h2 className="mb-2 mt-4 font-heading text-xl font-medium sm:text-xl lg:mb-3 lg:mt-6 lg:text-2xl">
          <strong>4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</strong>
        </h2>
        <ol>
          <li>
            W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym
            odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do
            zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:
            <ul>
              <li>firma hostingowa na zasadzie powierzenia</li>
            </ul>
          </li>
          <li>
            Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne
            do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o
            prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą
            przetwarzane dłużej niż przez 3 lata.
          </li>
          <li>
            Przysługuje Ci prawo żądania od Administratora:
            <ul>
              <li>dostępu do danych osobowych Ciebie dotyczących,</li>
              <li>ich sprostowania,</li>
              <li>usunięcia,</li>
              <li>ograniczenia przetwarzania,</li>
              <li>oraz przenoszenia danych.</li>
            </ul>
          </li>
          <li>
            Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.2
            wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów
            realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie
            będzie mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do
            przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności
            ustalenia, dochodzenia lub obrony roszczeń.
          </li>
          <li>
            Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych
            Osobowych, ul. Stawki 2, 00-193 Warszawa.
          </li>
          <li>Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.</li>
          <li>
            W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym
            podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej
            umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.
          </li>
          <li>
            Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie
            danych osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.
          </li>
        </ol>
        <h2 className="mb-2 mt-4 font-heading text-xl font-medium sm:text-xl lg:mb-3 lg:mt-6 lg:text-2xl">
          <strong>5. Informacje w formularzach</strong>
        </h2>
        <ol>
          <li>
            Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile
            zostaną one podane.
          </li>
          <li>
            Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).
          </li>
          <li>
            Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w
            formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres
            e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.
          </li>
          <li>
            Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego
            formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu
            handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny
            sposób informuje, do czego on służy.
          </li>
        </ol>

        <h2 className="mb-2 mt-4 font-heading text-xl font-medium sm:text-xl lg:mb-3 lg:mt-6 lg:text-2xl">
          <strong>6. Logi Administratora</strong>
        </h2>
        <ol>
          <li>
            Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są
            wykorzystywane w celu administrowania serwisem.
          </li>
        </ol>
        <h2 className="mb-2 mt-4 font-heading text-xl font-medium sm:text-xl lg:mb-3 lg:mt-6 lg:text-2xl">
          <strong>7. Istotne techniki marketingowe</strong>
        </h2>
        <ol>
          <li>
            Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google
            Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych
            osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na wykorzystaniu
            ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach
            użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i
            edytować informacje wynikające z plików cookies przy pomocy narzędzia:
            https://www.google.com/ads/preferences/
          </li>
        </ol>

        <h2 className="mb-2 mt-4 font-heading text-xl font-medium sm:text-xl lg:mb-3 lg:mt-6 lg:text-2xl">
          <strong>8. Informacja o plikach cookies</strong>
        </h2>
        <ol>
          <li>Serwis korzysta z plików cookies.</li>
          <li>
            Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki
            tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i
            przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj
            zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na
            urządzeniu końcowym oraz unikalny numer.
          </li>
          <li>
            Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz
            uzyskującym do nich dostęp jest operator Serwisu.
          </li>
          <li>
            Pliki cookies wykorzystywane są w następujących celach:
            <ol>
              <li>
                utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie
                musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;
              </li>
              <li>
                realizacji celów określonych powyżej w części &quot;Istotne techniki
                marketingowe&quot;;
              </li>
            </ol>
          </li>
          <li>
            W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session
            cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi,
            które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania,
            opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki
            internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika
            przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez
            Użytkownika.
          </li>
          <li>
            Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj
            domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika.
            Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie.&nbsp;Przeglądarka
            internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne
            blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub
            dokumentacja przeglądarki internetowej.
          </li>
          <li>
            Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne
            na stronach internetowych Serwisu.
          </li>
          <li>
            Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą
            być również przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy
            to firm: Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w
            USA), Twitter (Twitter Inc. z siedzibą w USA).
          </li>
        </ol>
        <h2 className="mb-2 mt-4 font-heading text-xl font-medium sm:text-xl lg:mb-3 lg:mt-6 lg:text-2xl">
          <strong>9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</strong>
        </h2>
        <ol>
          <li>
            Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia
            przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów
            uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może
            utrudnić,&nbsp;a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www
          </li>
          <li>
            W celu zarządzania ustawieniami plików cookies wybierz z listy poniżej przeglądarkę
            internetową, której używasz i postępuj zgodnie z instrukcjami:
            <ul>
              <li>
                <a href="https://support.microsoft.com/pl-pl/help/10607/microsoft-edge-view-delete-browser-history">
                  Edge
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer">
                  Internet Explorer
                </a>
              </li>
              <li>
                <a href="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647">
                  Chrome
                </a>
              </li>
              <li>
                <a href="http://support.apple.com/kb/PH5042">Safari</a>
              </li>
              <li>
                <a href="http://support.mozilla.org/pl/kb/W%C5%82%C4%85czanie%20i%20wy%C5%82%C4%85czanie%20obs%C5%82ugi%20ciasteczek">
                  Firefox
                </a>
              </li>
              <li>
                <a href="http://help.opera.com/Windows/12.10/pl/cookies.html">Opera</a>
              </li>
            </ul>
            <p>Urządzenia mobilne:</p>
            <ul>
              <li>
                <a href="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647">
                  Android
                </a>
              </li>
              <li>
                <a href="http://support.apple.com/kb/HT1677?viewlocale=pl_PL">Safari (iOS)</a>
              </li>
              <li>
                <a href="http://www.windowsphone.com/pl-pl/how-to/wp7/web/changing-privacy-and-other-browser-settings">
                  Windows Phone
                </a>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}