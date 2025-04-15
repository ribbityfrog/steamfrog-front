<script setup lang="ts">

</script>

<template>
    <Page>
        <Hh1>Welcome</Hh1>
        <Section class="text-center" class-content="gap-y-4">
            <p>
                I was looking for stats about the Steam Store, but nothing tickled my fancy. <br>
                I went for the classic developper approach : Let's build it, it'll be fun somehow
            </p>
            <p>
                As you may have noticed, it's <span class="font-semibold">in construction</span> <br>
                I'm working from time to time on it, resetting the whole db a lot, so it'll be done from time to time ^^
            </p>
            <p>
                I gathered a lot of data, but there are still tackled with my own opinions <br>
                You can read more about it in the FAQ (comfing soon) or directly come ask on <LinkDiscord />
            </p>
            <p>
                <span class="font-semibold">Full disclaimer</span> <br>
                I intend to share and make the most of it <br>
                If you want "my" data for your project, I'm fully open to talk about anything... related to it
            </p>
        </Section>
        <Section title="Sculpted thanks to" title-center class="text-center mt-12" class-content="gap-y-4">
            <div class="space-y-2">
                <p>
                    The main tools I used will never be thanked enough<br>
                    Let's make it kind of visible
                </p>
                <Flex col class="gap-y-1">
                    <p>
                        Backend powered by <KitLink to="https://adonisjs.com" tab>AdonisJS</KitLink>
                    </p>
                    <p>
                        Frontend powered by <KitLink to="https://nuxt.com" tab>Nuxt</KitLink>
                    </p>
                    <p>
                        Data hosted on <KitLink to="https://www.clever-cloud.com" tab>Clever cloud</KitLink>
                    </p>
                    <p>
                        UI designed with <KitLink to="https://ui.nuxt.com" tab>Nuxt UI</KitLink>
                    </p>
                    <p>
                        Charted with <KitLink to="https://apexcharts.com" tab>Apex Charts</KitLink>
                    </p>
                </Flex>
            </div>
            <Flex>
                <p>Special thanks to the <span class="font-medium"> Nuxt </span> and <span class="font-medium"> AdonisJS </span> communities on Discord</p>
            </Flex>
        </Section>
    </Page>
</template>
