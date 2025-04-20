<script setup lang="ts">

</script>

<template>
    <Page>
        <Hh1>Welcome</Hh1>
        <Section class="text-center" class-content="gap-y-4">
            <p>
                I was looking for stats about the Steam Store, but nothing tickled my fancy. <br>
                So... let's build it, it'll be fun somehow !
            </p>
            <p>
                As you may have noticed, it's <span class="font-semibold">under construction</span> <br>
                I'm working on it from time to time, resetting the whole db a lot, so it'll be down here and there ^^
            </p>
            <p>
                I gathered a lot of data, but the statistics are objectively opinionated <br>
                You can read more about it in the <KitLink to="/faq" local>FAQ</KitLink> or directly come ask on <LinkDiscord />
            </p>
            <p>
                <span class="font-semibold">Full disclaimer</span> <br>
                I will eventually make is as open as possible <br>
                If you want to create a project from the data I'm using, let's talk about it :)
            </p>
        </Section>
        <Section title="Sculpted thanks to" title-center class="text-center mt-8" class-content="gap-y-4">
            <div class="space-y-2">
                <p>
                    Thanks to all the frameworks/tools I'm using<br>
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
                        Data hosted on <KitLink to="https://www.clever-cloud.com" tab>Clever Cloud</KitLink>
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
