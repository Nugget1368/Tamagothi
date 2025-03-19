# :cat:Uppgiftsbeskrivning
Din uppgift är att skapa en spel-applikation som tillåter användaren att adoptera husdjur som ska omhändertas med hjälp av olika aktiviteter 🙂

## :star: Godkänt
Användare ska kunna skapa upp ett som ska kunna utföra olika aktiviteter.

### Klasser

Varje husdjur som skapas ska ha följande egenskaper:
- name
- animalType
- energy
- fullness
- happiness

#### Animal Type
AnimalType ska kunna väljas mellan **fyra förvalda olika djurtyper.**

#### Energy, Fullness, Happiness
Energy, fullness, och happiness ska vara en **siffror** som indikerar dess värde, **mellan 0-100**. **Startvärde för samtliga ska vara 50**.

### Aktiviteter
Varje husdjur ska kunna göra följande aktiviteter som uppdaterar dess egenskaper enligt följande krav (siffrorna kan justeras):

1. **nap** - Ökar energy med 40, sänker happiness med 10 och fullness med 10.

2. **play** - Ökar happiness med 30, sänker fullness och energy med 10. 

3. **eat** - Ökar fullness med 30 och happiness med 5, sänker energy med 15. 


När man utför en aktivitet, ska det skrivas ut ett meddelande vad man gör och med vilket djur t.ex. “You played with Maya!” eller “You took a nap with Lexi” etc. 

### Historik
Det ska finnas en textruta med all historik på samtliga aktiviteter som skett.

***

## :star: Väl Godkänt (VG)

### Flera djur
Användare ska kunna skapa upp flera husdjur (upp till 4 stycken).

### Ta bort husdjur
Om något av värdena når 0, så springer husdjuret iväg på grund av misskötsel. Ta bort husdjuret från DOM:en.

### Timer
Varje husdjur ska sätta igång en timer när den skapas. Var 10:e sekund minskar energy fullness  och happiness med 15.

***