import { test, expect } from '@playwright/test';

test.setTimeout(6000000);

test.describe('Grouping Admin Test@group', () => {
    test('Fail@username', async ({ page }) => {
        await page.goto('https://www.surin.rmuti.ac.th/Test/Quo/New/login.php');
        await page.getByPlaceholder('ชื่อบัญชี').click();
        await page.getByPlaceholder('ชื่อบัญชี').fill('test1');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('test');
        await page.pause();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'failusername.png',fullPage: true});
        await page.locator("(//button[contains(text(),'เข้าสู่ระบบ')])[1]").click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'failusername.png',fullPage: true});
    });

    test('Fail@password', async ({ page }) => {
        await page.goto('https://www.surin.rmuti.ac.th/Test/Quo/New/login.php');
        await page.getByPlaceholder('ชื่อบัญชี').click();
        await page.getByPlaceholder('ชื่อบัญชี').fill('test');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('test1');
        await page.pause();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'failpassword.png',fullPage: true});
        await page.locator("(//button[contains(text(),'เข้าสู่ระบบ')])[1]").click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'failpassword.png',fullPage: true});
    });

    test('All Fail@incomplete', async ({ page }) => {
        await page.goto('https://www.surin.rmuti.ac.th/Test/Quo/New/login.php');
        await page.screenshot({path: 'tests/image/'+ Date.now() +'all-fail.png',fullPage: true});
        await page.locator("(//button[contains(text(),'เข้าสู่ระบบ')])[1]").click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'all-fail.png',fullPage: true});
    });

    test('All Pass@complete', async ({ page }) => {
        await page.goto('https://www.surin.rmuti.ac.th/Test/Quo/New/login.php');
        await page.getByPlaceholder('ชื่อบัญชี').click();
        await page.getByPlaceholder('ชื่อบัญชี').fill('test');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('test');
        await page.pause();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'all-pass.png',fullPage: true});
        await page.locator("(//button[contains(text(),'เข้าสู่ระบบ')])[1]").click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'all-pass.png',fullPage: true});
    });

    test('SideBar@sidebar', async ({ page }) => {
        await page.goto('https://www.surin.rmuti.ac.th/Test/Quo/New/login.php');
        await page.getByPlaceholder('ชื่อบัญชี').click();
        await page.getByPlaceholder('ชื่อบัญชี').fill('test');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('test');
        await page.pause();
        await page.locator("(//button[contains(text(),'เข้าสู่ระบบ')])[1]").click();
        await page.goto('https://www.surin.rmuti.ac.th/Test/Quo/New/index.php');
        await page.locator('a').filter({ hasText: 'ออกรหัสผู้สมัคร' }).click();
        await page.getByRole('link', { name: ' รอบโควตา' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'sidebar.png',fullPage: true});
        await page.getByRole('link', { name: ' รอบรับตรง' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'sidebar.png',fullPage: true});
        await page.getByRole('link', { name: ' ภาคเรียนที่' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'sidebar.png',fullPage: true});

        await page.locator('a').filter({ hasText: 'ผู้สมัครเรียน' }).first().click();
        await page.getByRole('link', { name: ' แก้ไขรหัส' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'sidebar.png',fullPage: true});
        await page.getByRole('link', { name: ' แก้ไขสาขาที่สมัคร' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'sidebar.png',fullPage: true});

        await page.locator('a').filter({ hasText: 'เพิ่มรหัสนักศึกษา' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'sidebar.png',fullPage: true});

        await page.getByRole('link', { name: 'เพิ่มรหัสรายคน' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'sidebar.png',fullPage: true});

        await page.locator('a').filter({ hasText: 'นักศึกษา' }).nth(1).click();
        await page.getByRole('link', { name: 'นักศึกษาปี 2568' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'sidebar.png',fullPage: true});
        await page.getByRole('link', { name: 'นักศึกษาปี 2567' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'sidebar.png',fullPage: true});

        await page.locator('a').filter({ hasText: 'สาขาและโปรแกรม' }).click();
        await page.getByRole('link', { name: 'สาขา' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'sidebar.png',fullPage: true});
        await page.getByRole('link', { name: ' ปวส' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'sidebar.png',fullPage: true});
        await page.getByRole('link', { name: ' ป.ตรี', exact: true }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'sidebar.png',fullPage: true});
        await page.getByRole('link', { name: ' ป.โท' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'sidebar.png',fullPage: true});
        await page.getByRole('link', { name: ' ป.ตรี เทียบโอน/ต่อเนื่อง' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'sidebar.png',fullPage: true});
        await page.getByRole('link', { name: ' ป.เอก' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'sidebar.png',fullPage: true});

        await page.getByRole('link', { name: ' หน้าหลัก' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'sidebar.png',fullPage: true});

        page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => { });
        });
    });

    test('Issue an applicant code@quota', async ({ page }) => {
        await page.goto('https://www.surin.rmuti.ac.th/Test/Quo/New/login.php');
        await page.getByPlaceholder('ชื่อบัญชี').click();
        await page.getByPlaceholder('ชื่อบัญชี').fill('test');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('test');
        await page.pause();
        await page.locator("(//button[contains(text(),'เข้าสู่ระบบ')])[1]").click();
        await page.goto('https://www.surin.rmuti.ac.th/Test/Quo/New/index.php');
        await page.locator('a').filter({ hasText: 'ออกรหัสผู้สมัคร' }).click();
        await page.getByRole('link', { name: ' รอบโควตา' }).click();
        await page.locator('#finput1').getByRole('button', { name: ' แก้ไข' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'quota.png',fullPage: true});
        await page.getByPlaceholder('ระบุรหัสผู้สมัคร').click();
        await page.getByPlaceholder('ระบุรหัสผู้สมัคร').fill('400');
        await page.screenshot({path: 'tests/image/'+ Date.now() +'quota.png',fullPage: true});
        page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => { });
        });
        await page.getByRole('button', { name: 'บันทึกรหัสผู้สมัคร' }).click();

        await page.locator('a').filter({ hasText: 'ออกรหัสผู้สมัคร' }).click();
        await page.getByRole('link', { name: ' รอบโควตา' }).click();
        await page.locator('#finput2').getByRole('button', { name: ' แก้ไข' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'quota.png',fullPage: true});
        await page.getByPlaceholder('ระบุรหัสผู้สมัคร').click();
        await page.getByPlaceholder('ระบุรหัสผู้สมัคร').fill('400');
        await page.screenshot({path: 'tests/image/'+ Date.now() +'quota.png',fullPage: true});
        page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => { });
        });
        await page.getByRole('button', { name: 'บันทึกรหัสผู้สมัคร' }).click();

        await page.locator('a').filter({ hasText: 'เพิ่มรหัสนักศึกษา' }).click();
        await page.getByRole('link', { name: 'เพิ่มรหัสรายคน' }).click();
        await page.locator('select[name="category_id"]').selectOption('?menu=IsertSTUID&ac=&limit=50&Ye=2568');
        await page.getByRole('combobox').nth(1).selectOption('?menu=IsertSTUID&ac=&limit=50&Ye=2568&R=โควตา');
        await page.screenshot({path: 'tests/image/'+ Date.now() +'quota.png',fullPage: true});

        await page.locator('a').filter({ hasText: 'ออกรหัสผู้สมัคร' }).click();
        await page.getByRole('link', { name: ' รอบโควตา' }).click();
        await page.locator('#finput2').getByRole('button', { name: ' แก้ไข' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'quota.png',fullPage: true});
        await page.getByPlaceholder('ระบุรหัสผู้สมัคร').click();
        await page.getByPlaceholder('ระบุรหัสผู้สมัคร').fill('401');
        await page.screenshot({path: 'tests/image/'+ Date.now() +'quota.png',fullPage: true});
        page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => { });
        });
        await page.getByRole('button', { name: 'บันทึกรหัสผู้สมัคร' }).click();

        await page.locator('a').filter({ hasText: 'เพิ่มรหัสนักศึกษา' }).click();
        await page.getByRole('link', { name: 'เพิ่มรหัสรายคน' }).click();
        await page.locator('select[name="category_id"]').selectOption('?menu=IsertSTUID&ac=&limit=50&Ye=2568');
        await page.getByRole('combobox').nth(1).selectOption('?menu=IsertSTUID&ac=&limit=50&Ye=2568&R=โควตา');
        await page.screenshot({path: 'tests/image/'+ Date.now() +'quota.png',fullPage: true});
    });

    test('Edit the applicant code@EditCode', async ({ page }) => {
        await page.goto('https://www.surin.rmuti.ac.th/Test/Quo/New/login.php');
        await page.getByPlaceholder('ชื่อบัญชี').click();
        await page.getByPlaceholder('ชื่อบัญชี').fill('test');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('test');
        await page.pause();
        await page.locator("(//button[contains(text(),'เข้าสู่ระบบ')])[1]").click();
        await page.goto('https://www.surin.rmuti.ac.th/Test/Quo/New/index.php');
        await page.locator('a').filter({ hasText: 'ผู้สมัครเรียน' }).first().click();
        await page.getByRole('link', { name: ' แก้ไขรหัส' }).click();
        await page.locator("(//button[@type='submit'][contains(text(),'แก้ไข')])[24]").click()
        await page.getByPlaceholder('ระบุรหัสผู้สมัคร').click();
        await page.getByPlaceholder('ระบุรหัสผู้สมัคร').fill('12211');
        await page.screenshot({path: 'tests/image/'+ Date.now() +'quota.png',fullPage: true});
        page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => { });
        });
        await page.getByRole('button', { name: 'บันทึกรหัสผู้สมัคร' }).click();
        await page.locator('a').filter({ hasText: 'ผู้สมัครเรียน' }).first().click();
        await page.getByRole('link', { name: ' แก้ไขรหัส' }).click();
        await page.getByRole('gridcell', { name: '12211' }).nth(1).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'quota.png',fullPage: true});
        await page.pause();
    });

    test('Edit the applicant field of study@EditFieldOfStudy', async ({ page }) => {
        await page.goto('https://www.surin.rmuti.ac.th/Test/Quo/New/login.php');
        await page.getByPlaceholder('ชื่อบัญชี').click();
        await page.getByPlaceholder('ชื่อบัญชี').fill('test');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('test');
        await page.pause();
        await page.locator("(//button[contains(text(),'เข้าสู่ระบบ')])[1]").click();
        await page.goto('https://www.surin.rmuti.ac.th/Test/Quo/New/index.php');
        await page.locator('a').filter({ hasText: 'ผู้สมัครเรียน' }).first().click();
        await page.getByRole('link', { name: ' แก้ไขสาขาที่สมัคร' }).click();
        await page.locator("(//button[@type='submit'][contains(text(),'แก้ไขสาขา')])[7]").click()
        await page.getByRole('radio').first().check();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'edit.png',fullPage: true});
        await page.locator('#degree2').check();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'edit.png',fullPage: true});
        await page.locator('#program').selectOption('2221011');
        await page.screenshot({path: 'tests/image/'+ Date.now() +'edit.png',fullPage: true});
        page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => { });
        });
        await page.pause();
        await page.getByRole('button', { name: 'แก้ไข' }).click();
        await page.locator('a').filter({ hasText: 'ผู้สมัครเรียน' }).first().click();
        await page.getByRole('link', { name: ' แก้ไขรหัส' }).click();
        await page.locator("(//td[normalize-space()='105'])[1]").click()
        await page.screenshot({path: 'tests/image/'+ Date.now() +'edit.png',fullPage: true});
    });

    test('Edit Applicants for semester 2@semester2', async ({ page }) => {
        await page.goto('https://www.surin.rmuti.ac.th/Test/Quo/New/login.php');
        await page.getByPlaceholder('ชื่อบัญชี').click();
        await page.getByPlaceholder('ชื่อบัญชี').fill('test');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('test');
        await page.pause();
        await page.locator("(//button[contains(text(),'เข้าสู่ระบบ')])[1]").click();
        await page.locator('a').filter({ hasText: 'ผู้สมัครเรียนเทมอ' }).click();
        await page.getByRole('link', { name: ' แก้ไขรหัส' }).click();
        await page.locator("(//button[@type='submit'][contains(text(),'แก้ไข')])[3]").click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'applicants-term2.png',fullPage: true});
        await page.getByPlaceholder('ระบุรหัสผู้สมัคร').click();
        await page.getByPlaceholder('ระบุรหัสผู้สมัคร').fill('250');
        await page.screenshot({path: 'tests/image/'+ Date.now() +'applicants-term2.png',fullPage: true});
        page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => { });
        });
        await page.getByRole('button', { name: 'บันทึกรหัสผู้สมัคร' }).click();
        await page.locator('a').filter({ hasText: 'ผู้สมัครเรียนเทมอ' }).click();
        await page.getByRole('link', { name: ' แก้ไขรหัส' }).click();
        await page.getByRole('gridcell', { name: '250' }).nth(1).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'applicants-term2.png',fullPage: true});
    });

    test('Add Students ID@addID', async ({ page }) => {
        await page.goto('https://www.surin.rmuti.ac.th/Test/Quo/New/login.php');
        await page.getByPlaceholder('ชื่อบัญชี').click();
        await page.getByPlaceholder('ชื่อบัญชี').fill('test');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('test');
        await page.pause();
        await page.locator("(//button[contains(text(),'เข้าสู่ระบบ')])[1]").click();
        await page.goto('https://www.surin.rmuti.ac.th/Test/Quo/New/index.php');
        await page.locator('a').filter({ hasText: 'เพิ่มรหัสนักศึกษา' }).click();
        await page.getByRole('link', { name: 'เพิ่มรหัสรายคน' }).click();
        await page.locator('select[name="category_id"]').selectOption('?menu=IsertSTUID&ac=&limit=50&Ye=2568');
        await page.getByRole('combobox').nth(1).selectOption('?menu=IsertSTUID&ac=&limit=50&Ye=2568&R=โควตา');
        await page.locator("(//input[@name='STUID'])[3]").fill('68222110123-6');
        await page.screenshot({path: 'tests/image/'+ Date.now() +'add-id.png',fullPage: true});
        page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => { });
        });
        await page.locator("(//button[@type='submit'][contains(text(),'เพิ่มรหัส')])[3]").click();
        await page.locator('a').filter({ hasText: 'นักศึกษา' }).nth(1).click();
        await page.getByRole('link', { name: 'นักศึกษาปี 2568' }).click();
        await page.locator("(//td[@class='text-center'][contains(text(),'โควตา')])[1]").click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'add-id.png',fullPage: true});
    });

    test('Exit@exit', async ({ page }) => {
        await page.goto('https://www.surin.rmuti.ac.th/Test/Quo/New/login.php');
        await page.getByPlaceholder('ชื่อบัญชี').click();
        await page.getByPlaceholder('ชื่อบัญชี').fill('test');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('test');
        await page.pause();
        await page.locator("(//button[contains(text(),'เข้าสู่ระบบ')])[1]").click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'logout.png',fullPage: true});
        await page.getByRole('link', { name: ' ออกจากระบบ' }).click();
        await page.screenshot({path: 'tests/image/'+ Date.now() +'logout.png',fullPage: true});
    });
});