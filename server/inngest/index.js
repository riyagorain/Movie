


// import { Inngest } from "inngest";
// import User from "../models/User.js";

// export const inngest = new Inngest({ id: "movie-ticket-booking" });

// const syncUserCreation = inngest.createFunction(
//   {
//     id: "sync-user-from-clerk",
//     triggers: [{ event: "clerk/user.created" }],
//   },
//   async ({ event }) => {
//     const { id, first_name, last_name, email_addresses, image_url } = event.data;

//     const userData = {
//       _id: id,
//       email: email_addresses?.[0]?.email_address || "",
//       name: `${first_name} ${last_name}`,
//       image: image_url,
//     };

//     await User.findByIdAndUpdate(id, userData, { upsert: true });
//   }
// );

// // ✅ DELETE USER


// const syncUserDeletion = inngest.createFunction(
//   {
//     id: "delete-user-with-clerk",
//     triggers: [{ event: "clerk/user.deleted" }],
//   },
//   async ({ event }) => {
//     const { id } = event.data;
//     await User.findByIdAndDelete(id);
//   }
// );

// // ✅ UPDATE USER


// const syncUserUpdation = inngest.createFunction(
//   {
//     id: "update-user-from-clerk",
//     triggers: [{ event: "clerk/user.updated" }],
//   },
//   async ({ event }) => {
//     const { id, first_name, last_name, email_addresses, image_url } = event.data;

//     const userData = {
//       email: email_addresses?.[0]?.email_address || "",
//       name: `${first_name} ${last_name}`,
//       image: image_url,
//     };

//     await User.findByIdAndUpdate(id, userData);
//   }
// );




// export const functions = [
//   syncUserCreation,
//   syncUserDeletion,
//   syncUserUpdation,
// ];


import { Inngest } from "inngest";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "movie-ticket-booking" });

// CREATE USER
const syncUserCreation = inngest.createFunction(
  {
    id: "sync-user-from-clerk",
    triggers: [{ event: "clerk/user.created" }],
  },
  async ({ event }) => {
    try {
      const { id, first_name, last_name, email_addresses, image_url } = event.data;

      const userData = {
        _id: id,
        email: email_addresses?.[0]?.email_address ?? null,
        name: `${first_name} ${last_name}`,
        image: image_url,
      };

      await User.findByIdAndUpdate(id, userData, { upsert: true });

    } catch (error) {
      console.error("Create Error:", error);
    }
  }
);

// DELETE USER
const syncUserDeletion = inngest.createFunction(
  {
    id: "delete-user-with-clerk",
    triggers: [{ event: "clerk/user.deleted" }],
  },
  async ({ event }) => {
    try {
      const { id } = event.data;
      await User.findByIdAndDelete(id);
    } catch (error) {
      console.error("Delete Error:", error);
    }
  }
);

// UPDATE USER
const syncUserUpdate = inngest.createFunction(
  {
    id: "update-user-from-clerk",
    triggers: [{ event: "clerk/user.updated" }],
  },
  async ({ event }) => {
    try {
      const { id, first_name, last_name, email_addresses, image_url } = event.data;

      const userData = {
        _id: id,
        email: email_addresses?.[0]?.email_address ?? null,
        name: `${first_name} ${last_name}`,
        image: image_url,
      };

      await User.findByIdAndUpdate(id, userData, { upsert: true });

    } catch (error) {
      console.error("Update Error:", error);
    }
  }
);

export const functions = [
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdate,
];