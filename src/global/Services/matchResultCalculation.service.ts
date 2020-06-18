import { CalculationResult } from "src/match/ResultObjects/calculationResult";
import { Match } from "src/match/match.entity";


export class MatchResultCalculationService{

    private readonly PLAYER1_INDEX = 0;
    private readonly PLAYER2_INDEX = 1;
    private loser: number;

    public getMatchLoser(){
        return this.loser;
    }

    checkMatchLoser(matchToCalculate: Match): number{
        let loser: number;

        if(matchToCalculate.winner == 1){
            loser = 2
        }
        if(matchToCalculate.winner == 2){
            loser = 1
        }

        return loser;
    }

    addSetsToWinners(matchToCalculate: Match){
        let winnerSetsWon = 0
        let winnerSetsLost = 0;
        let loserSetsWon = 0
        let loserSetsLost = 0;

        const loser: number = this.checkMatchLoser(matchToCalculate)

        for(let i = 0; i < matchToCalculate.setsNumber; i++){
            if(matchToCalculate.matchPlayerData[matchToCalculate.winner - 1].setScores[i].games > matchToCalculate.matchPlayerData[loser - 1].setScores[i].games){
                winnerSetsWon++;
                loserSetsLost++;
            }
            if(matchToCalculate.matchPlayerData[loser - 1].setScores[i].games > matchToCalculate.matchPlayerData[matchToCalculate.winner - 1].setScores[i].games){
                loserSetsWon++;
                winnerSetsLost++;
            }
        }
        return {winnerSetsWon, winnerSetsLost, loserSetsWon, loserSetsLost}
    }

    public assignPointsGainToPlayers(matchToCalculate: Match){ 
        const calculateResult = new CalculationResult()

        const loser: number = this.checkMatchLoser(matchToCalculate)
        let loserGames = 0;

        matchToCalculate.matchPlayerData[loser - 1].setScores.forEach(setScore =>{
            loserGames = loserGames + setScore.games;
        })

        switch(matchToCalculate.setsNumber){
            case 2: {
                if(loserGames <= 3){
                    calculateResult.winnerPointsGained = matchToCalculate.pointsGain * 0.8
                    calculateResult.loserPointsGained = matchToCalculate.pointsGain * 0.2
                }
                if(loserGames > 3 && loserGames <= 6){
                    calculateResult.winnerPointsGained = matchToCalculate.pointsGain * 0.75
                    calculateResult.loserPointsGained = matchToCalculate.pointsGain * 0.25
                }
                break;
            }
            case 3: { 
                calculateResult.winnerPointsGained = matchToCalculate.pointsGain * 0.65
                calculateResult.loserPointsGained = matchToCalculate.pointsGain * 0.35
                break;
            }
            default: {
                calculateResult.winnerPointsGained = matchToCalculate.pointsGain * 0.7
                calculateResult.loserPointsGained = matchToCalculate.pointsGain * 0.3
                break;
            }
        }

        return calculateResult;
    }
    
    calculatePointsGain(matchToCalculate: Match): number{ 
    
        return (matchToCalculate.matchPlayerData[this.PLAYER1_INDEX].player.generalPoints + 
                matchToCalculate.matchPlayerData[this.PLAYER2_INDEX].player.generalPoints)
                /2;
    }
}