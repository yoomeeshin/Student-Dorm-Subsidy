// import { createClient } from "@supabase/supabase-js";
// import fs from "node:fs";
// import { parse, Options } from "csv-parse";

// type ValidationResult = {
//   validRows: Array<User>;
//   invalidRows: Array<{ name: string; errors: string[] }>;
// };

// const VALID_EMAIL_REGEX = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
// function validate_email(email: string): boolean {
//   return VALID_EMAIL_REGEX.test(email);
// }

// interface User {
//   name: string;
//   email: string;
//   room: string;
//   is_admin: boolean;
// }

// export async function readCSVFile(
//   filePath: string,
//   parserOptions: Options
// ): Promise<Array<User>> {
//   const entries: Array<User> = [];

//   return new Promise((resolve) => {
//     fs.createReadStream(filePath)
//       // note: setting columns true allows us to return the data as objects, but this also requires us to have a header row !!
//       .pipe(parse({ ...parserOptions, columns: true, skip_empty_lines: true }))
//       .on("data", (row) => {
//         entries.push(row);
//       })
//       .on("error", console.log)
//       .on("end", () => resolve(entries));
//   });
// }

// async function validateUserOnboardingData(
//   filePath: string
// ): Promise<ValidationResult> {
//   const validRows: User[] = [];
//   const invalidRows: { name: string; email: string; errors: string[] }[] = [];

//   const entries = await readCSVFile(filePath, {
//     columns: ["name", "email", "room", "is_admin"],
//   });

//   for (let i = 0; i < entries.length; i++) {
//     const entry = entries[i];
//     console.log("Entry:", entry);
//     const is_email_valid = validate_email(entry.email);
//     if (!is_email_valid) {
//       invalidRows.push({
//         name: entry.name,
//         email: entry.email,
//         errors: ["Email must be a valid gmail account"],
//       });
//       continue;
//     } else {
//       validRows.push(entry);
//     }
//   }

//   return { validRows, invalidRows };
// }

// // NOTE: CHANGE PATH, for some reason it fails when using relative path
// (async () => {
//   const { validRows, invalidRows } = await validateUserOnboardingData(
//     "/Users/hrishikeshsathyian/Documents/GitHub/Shweb/intranet-next-app/intranet-next-app/scripts/users.csv"
//   );
//   // add valid users to the database
//   validRows.map(async (row) => {
//     // handle adding user to supabase
//     try {
//       await supabase.from(usersTableName).insert({
//         name: row.name.toUpperCase(),
//         email: row.email,
//         room: row.room,
//         is_admin: row.is_admin,
//       });
//       console.log("User added to Supabase Successfully! : ", row.name);
//     } catch (error) {
//       console.log("Error adding user to Supabase: ", error);
//     }
//     // handle adding user to firebase
//     try {
//       await adminAuth.createUser({
//         email: row.email,
//         displayName: row.name,
//       });
//       console.log("User added to Firebase Successfully! : ", row.name);
//     } catch (error) {
//       console.log("Error adding user to Firebase: ", error);
//     }
//   });

//   fs.writeFile(
//     "/Users/hrishikeshsathyian/Documents/GitHub/Shweb/intranet-next-app/intranet-next-app/scripts/errors.txt",
//     JSON.stringify(invalidRows, null, 2),
//     (err) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log("Invalid rows written to file successfully.");
//       }
//     }
//   );
// })();
