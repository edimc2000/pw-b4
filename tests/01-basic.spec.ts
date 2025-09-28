import { test, expect } from '@playwright/test'

test.describe('Validate the Wiki Page', () => {

    test.beforeEach('', async ({ page }) => {
        await page.goto('https://wikipedia.org/')
    })

    test('[TS001] Validate Title', async ({ page }) => {
        expect(await page.title()).toBe('Wikipedia')
    })

    test('[TS002] Validate url', async ({ page }) => {
        expect(page.url()).toBe('https://www.wikipedia.org/')
        expect(page.url()).toContain('wikipedia')
    })
    test('[TS003] Validate search input', async ({ page }) => {
        await expect(page.locator('#searchInput')).toBeEmpty()
    })

    test('[TS004] Search for Donald Trump', async ({ page }) => {

        await page.locator('#searchInput').fill('Donald Trump')
        // await page.waitForTimeout(1000)
        await page.locator('button.pure-button').click()
        // await page.waitForTimeout(5000)
    })




})


    test('[TS0052] Lazada', async ({ page }) => {
        await page.goto('https://www.lazada.com.ph/')
        await page.locator('#q').fill('samsung')
        await page.locator('a[class^="search"]').click()
        await page.waitForTimeout(5000)
    })