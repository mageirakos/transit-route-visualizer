db.createUser(
    {
        user: "eceupatras",
        pwd: "pwd",
        roles: [
            {
                role: "readWrite",
                db: "bus_ece"
            }
        ]
    }
)
