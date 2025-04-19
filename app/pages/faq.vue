<script setup lang="ts">

const items = [
    {
        slot: 'source',
        label: 'Where do you get your data ?'
    },
    {
        slot: 'mistake',
        label: 'I think I found a mistake'
    },
    {
        slot: 'decommissionned',
        label: 'You have ALL Games and DLCs ?'
    },
    {
        slot: 'together',
        label: 'Any API ? Can we use your data ?'
    },
    {
        slot: 'update',
        label: 'How often is the base updated ?',
    },
    {
        slot: 'usa',
        label: 'Steam store... worldwide ?',
    },
    {
        slot:'dlc',
        label: 'How do you merge stats between Games and DLCs ?'
    },
    {
        slot: 'cod',
        label: 'Why is Call of Duty\'s multiplayer a huge let down ?'
    },
    {
        slot: 'frog',
        label: 'Why is it called steamfrog ?'
    },
    {
        slot: 'net',
        label: 'But why .net ?'
    },
    {
        slot: 'logo',
        label: 'But... why a frog ?'
    }
]

const divSpace = 'space-y-2'

</script>

<template>
    <Page>
        <Hh1>FAQ</Hh1>
        <Section>
            <KitAccordion :items="items" trailing-icon="i-lucide-plus">
                <template #source>
                    <p>
                        Steam and only Steam, from the Steam API for now. <br>
                        I would like to most direct possible data without any alteration.
                    </p>
                </template>
                <template #mistake>
                    <p>
                        Yeah there is probably more than one. <br>
                        You have my dets in the footer to contact me :)
                    </p>
                </template>
                <template #decommissionned>
                    <div :class="divSpace">
                        <p>
                            I use the Steam IStoreService to have the list of games on the Steam Store and filter to keep only the ones available in US. <br>
                            If they fully remove it, I will not have it and don't intend to try and keep it. <br>
                        </p>
                        <p>
                            What I look for is mainly a view of the "present" store. <br>
                        </p>
                        <p>
                            Since I reset the base often it's not a problem now, but I'll later automatically remove the games that are no longer listed by the store.
                        </p>
                    </div>
                </template>
                <template #together>
                    <div :class="divSpace">
                        <p>
                            I don't know how yet, but I want to collaborate with other projects. <br>
                            It's often assumed that since the data is available through Steam API, anybody can do something with it. <br>
                        </p>
                        <p>
                            I disagree, it was a huge pain, I bet there is a lot a people not well-versed enough in tech that have marvelous ideas. <br>
                        </p>
                        <p>
                            You have my dets in the footer, let's talk
                        </p>
                    </div>
                </template>
                <template #update>
                    <p>
                        As for today, when I feel like it. <br>
                        When I'll consider the project to be advanced enough, it will be daily updated at best, weekly at worst
                    </p>
                </template>
                <template #usa>
                    <p>
                        As you may know, games availability and prices in the Steam store depends on the country. <br>
                        It's actually worse :
                        <Uul>
                            <li>The same game can be released several time depending of the country policies</li>
                            <li>It's not the "same game", I would need to de-duplicate</li>
                            <li>I would have to retrieve the store for each country, which is doable but out scope as of now</li>
                            <li>China has its own Steam store or so I heard</li>
                        </Uul>
                        To have general statistics, one country is more than enough. I reckong the most targeted is the US one, so here we are.
                    </p>
                </template>
                <template #dlc>
                    <div :class="divSpace">
                        <p>
                            Games are DLC have close to no difference. <br>
                            They have their own price, tags, age limit, release date, reviews... everything.
                        </p>
                        <p>
                            The main difference is : They don't have achievements. <br>
                            That's why there is that many people complaining they can't 100% a game because they don't have the DLCs.
                        </p>
                    </div>
                </template>
                <template #cod>
                    <div :class="divSpace">
                        <p>
                            It's mainly because they match controller players with keyboard/mouse players. <br>
                            The aim assist is just so strong, they just need to shoot at your general direction to headshot the joy out of you. <br>
                        </p>
                        <p>
                            I'm not salty, next question.
                        </p>
                    </div>
                </template>
                <template #frog>
                    <p>
                        Because steampowered.com and steamdb.info were both taken
                    </p>
                </template>
                <template #net>
                    <p>
                        Nostalgia, cost and availability
                    </p>
                </template>
                <template #logo>
                    <Flex col center>
                        <img src="/img/brand/logo.png">
                        <p class="text-center text-lg font-semibold text-(--ui-primary)">
                            ribbit
                        </p>
                    </Flex>
                </template>
            </KitAccordion>
        </Section>
    </Page>
</template>
