export interface Task {
    id: number,
    task: string,
    complete: boolean
}

const tasks: Task[] = [
    {
        id: 0,
        task: 'Swim the Lagoon',
        complete: false,
    },
    {
        id: 1,
        task: 'Feed the Stingray',
        complete: false,
    },
    {
        id: 2,
        task: 'Entertain the Guests',
        complete: false,
    }
]

export default tasks