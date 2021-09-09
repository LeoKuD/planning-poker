export enum Role {
    player = 'player',
    dealer = 'dealer',
    observer = 'observer',
}

export type TypePosition = Role.player | Role.dealer | Role.observer;