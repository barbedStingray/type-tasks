export interface Task {
    task: string,
    complete: boolean
}

const tasks: Task[] = [
    {
        task: 'Weigh the shrimp',
        complete: false,
    },
    {
        task: 'Walk the Beach',
        complete: false,
    },
    {
        task: 'Swim the Lagoon',
        complete: false,
    },
    {
        task: 'Feed the Stingray',
        complete: false,
    },
    {
        task: 'Entertain the Guests',
        complete: false,
    }
]

export default tasks