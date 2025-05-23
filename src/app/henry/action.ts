'use server'
import {google} from "googleapis";

export const formSubmit = async (prevState:any, formData:FormData) => { 
    const name = formData.get('name');
    const phone = formData.get('phone');
    const plusOne = formData.get('plusOne');
    const plusOneName = formData.get('plusOneName'); 
 
    if(!name || !phone ){
        return {
            error: 'Please fill in all required fields.'
        }
    }
 
 
    const rawKey = process.env.GOOGLE_PRIVATE_KEY || "";
    const fixedKey = rawKey
        .replace(/^"(.*)"$/, "$1")
        .replace(/\\n/g, "\n");

    try {

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: fixedKey
            },
            scopes: [
                // 'https://www.googleapis.com/auth/drive',
                // 'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        })
        

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:E1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [
                        new Date().toLocaleDateString(),
                        name,
                        phone, 
                        plusOne,
                        plusOneName,
                    ]

                
                ]
            }
        });
        return {
            success: true,
            error: ''
        }
    }catch (error:any) {
        return {
            error: error.message,
            success: false
        }
    }

}



 